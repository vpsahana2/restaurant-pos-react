from sqlalchemy.orm import Session

from app.models.order import Order

from app.crud.order import create_order

from app.schemas.order import OrderCreate


def create_order_service(
    db: Session,
    request: OrderCreate,
):
    order = Order(
        customer_id=request.customer_id,
        payment_method=request.payment_method,
        subtotal=0,
        tax=0,
        grand_total=0,
    )

    return create_order(
        db,
        order,
    )