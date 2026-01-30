import ssl
import certifi
import os
os.environ["SSL_CERT_FILE"] = certifi.where()
from twilio.rest import Client


# Fix SSL certificate verification (Windows only)
ssl_context = ssl.create_default_context(cafile=certifi.where())

client = Client(
    os.environ["TWILIO_SID"],
    os.environ["TWILIO_AUTH_TOKEN"],
    http_client=None,  # Twilio uses default HTTPS handler
)

FROM = os.environ["TWILIO_WHATSAPP_FROM"]
TO = os.environ["ADMIN_WHATSAPP"]

def send_whatsapp_alert(data: dict):
    message = f"""
📩 *New Contact Inquiry*

👤 Name: {data['name']}
📞 Phone: {data['phone']}
📧 Email: {data.get('email', 'N/A')}

💬 Message:
{data['message']}
    """

    client.messages.create(
        body=message,
        from_=FROM,
        to=TO
    )
