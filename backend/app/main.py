from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)


@app.get("/")
def root():
    return {
        "message": "Restaurant POS API",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "database": "Not Checked Yet",
        "api": "Healthy",
    }