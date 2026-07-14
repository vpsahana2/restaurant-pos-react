from fastapi import FastAPI

from app.core.config import settings
from app.routers.auth import router as auth_router
from app.routers.products import router as product_router
from app.routers.categories import router as category_router
from app.routers.customers import router as customer_router
from app.routers.orders import router as order_router
from app.routers.payments import router as payment_router


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(auth_router)
app.include_router(product_router)
app.include_router(category_router)
app.include_router(customer_router)
app.include_router(order_router)
app.include_router(payment_router)

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