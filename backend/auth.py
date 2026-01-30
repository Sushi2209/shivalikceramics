
from datetime import datetime, timedelta
from jose import jwt
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")


SECRET = os.environ["JWT_SECRET"]
ALGO = "HS256"

def create_token():
    payload = {
        "role": "admin",
        "exp": datetime.utcnow() + timedelta(hours=8)
    }
    return jwt.encode(payload, SECRET, algorithm=ALGO)

def verify_token(token: str):
    return jwt.decode(token, SECRET, algorithms=[ALGO])
