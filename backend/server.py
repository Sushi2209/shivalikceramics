from fastapi import FastAPI, APIRouter, HTTPException, Depends, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from jose import JWTError
from auth import create_token, verify_token
from whatsapp_service import send_whatsapp_alert


def admin_guard(authorization: str = Header(...)):
    try:
        token = authorization.split(" ")[1]
        verify_token(token)
    except (JWTError, IndexError):
        raise HTTPException(status_code=401, detail="Unauthorized")

# -------------------- ENV SETUP --------------------
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]
db_name = os.environ["DB_NAME"]

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# -------------------- LIFESPAN --------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic (if needed later)
    yield
    # Shutdown logic
    client.close()

# -------------------- APP SETUP --------------------
app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")

# -------------------- MODELS --------------------
class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    message: str
    status: str="new"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
class ContactInquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    message: str

    @classmethod
    def model_validate(cls, value):
        if value.get("email") == "":
            value["email"] = None
        return super().model_validate(value)
    
# -------------------- ROUTES --------------------
@api_router.get("/")
async def root():
    return {"message": "Shivalik Ceramics API"}


@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    try:
        inquiry_obj = ContactInquiry(**input.model_dump())
        doc = inquiry_obj.model_dump()
        doc["timestamp"] = doc["timestamp"].isoformat()

        await db.contact_inquiries.insert_one(doc)
        try:
            send_whatsapp_alert(doc)
        except Exception as e:
            logging.error(f"WhatsApp alert failed: {e}")
        return inquiry_obj

    except Exception as e:
        logging.error(f"Error creating contact inquiry: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit inquiry")


@api_router.get("/contact", response_model=List[ContactInquiry], dependencies=[Depends(admin_guard)])
async def get_contact_inquiries():
    inquiries = (
        await db.contact_inquiries
        .find({}, {"_id": 0})
        .sort("timestamp", -1)
        .to_list(100)
    )

    for inquiry in inquiries:
        if isinstance(inquiry["timestamp"], str):
            inquiry["timestamp"] = datetime.fromisoformat(inquiry["timestamp"])

    return inquiries

@app.post("/api/admin/login")
async def admin_login(data: dict):
    if (
        data["email"] == os.environ["ADMIN_EMAIL"]
        and data["password"] == os.environ["ADMIN_PASSWORD"]
    ):
        return {"token": create_token()}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@api_router.patch("/contact/{id}", dependencies=[Depends(admin_guard)])
async def update_status(id: str, status: str):
    await db.contact_inquiries.update_one(
        {"id": id},
        {"$set": {"status": status}}
    )
    return {"success": True}

# -------------------- MIDDLEWARE --------------------
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# -------------------- LOGGING --------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)
