from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"],
)


@router.get("")
def dashboard(db: Session = Depends(get_db)):
    total_products = db.query(Product).count()

    total_customers = db.query(Customer).count()

    total_orders = db.query(Order).count()

    total_sales = (
        db.query(Order)
        .with_entities(Order.grand_total)
        .all()
    )

    sales = sum(
        order.grand_total
        for order in total_sales
    )

    return {
        "products": total_products,
        "customers": total_customers,
        "orders": total_orders,
        "sales": sales,
    }