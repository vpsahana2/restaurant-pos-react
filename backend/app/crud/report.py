from sqlalchemy import func

from sqlalchemy.orm import Session

from app.models.order import Order
from app.models.customer import Customer
from app.models.product import Product


def get_dashboard_report(db: Session):

    total_sales = (
        db.query(
            func.coalesce(
                func.sum(Order.grand_total),
                0,
            )
        ).scalar()
    )

    total_orders = db.query(Order).count()

    total_customers = db.query(Customer).count()

    total_products = db.query(Product).count()

    cash_sales = (
        db.query(
            func.coalesce(
                func.sum(Order.grand_total),
                0,
            )
        )
        .filter(Order.payment_method == "Cash")
        .scalar()
    )

    card_sales = (
        db.query(
            func.coalesce(
                func.sum(Order.grand_total),
                0,
            )
        )
        .filter(Order.payment_method == "Card")
        .scalar()
    )

    upi_sales = (
        db.query(
            func.coalesce(
                func.sum(Order.grand_total),
                0,
            )
        )
        .filter(Order.payment_method == "UPI")
        .scalar()
    )

    return {
        "total_sales": total_sales,
        "total_orders": total_orders,
        "total_customers": total_customers,
        "total_products": total_products,
        "cash_sales": cash_sales,
        "card_sales": card_sales,
        "upi_sales": upi_sales,
    }