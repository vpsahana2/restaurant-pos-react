from fastapi import FastAPI

from app.core.config import settings
from app.routers.auth import router as auth_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Restaurant POS API",
    }

# @app.get("/health")
# def health():
#     return {
#         "database": "Not Checked Yet",
#         "api": "Healthy",
#     }