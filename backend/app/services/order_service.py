from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.order import Order
from app.models.order_item import OrderItem
from app.crud.order import (
    get_orders,
    get_order,
)
from app.crud.order import (
    create_order,
    save_order,
    refresh_order,
)

from app.crud.product import get_product

from app.schemas.order import OrderCreate


TAX_PERCENTAGE = 5
from fastapi import HTTPException


def get_orders_service(db: Session):
    return get_orders(db)


def get_order_service(
    db: Session,
    order_id: int,
):
    order = get_order(
        db,
        order_id,
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    return order

def create_order_service(
    db: Session,
    request: OrderCreate,
):
    subtotal = 0

    order = Order(
        customer_id=request.customer_id,
        payment_method=request.payment_method,
        subtotal=0,
        tax=0,
        grand_total=0,
    )

    create_order(
        db,
        order,
    )

    for item in request.items:

        product = get_product(
            db,
            item.product_id,
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail=f"Product {item.product_id} not found",
            )

        if product.stock < item.quantity:
            raise HTTPException(
                status_code=400,
                detail=f"{product.name} is out of stock",
            )

        line_total = product.price * item.quantity

        subtotal += line_total

        order_item = OrderItem(
            order_id=order.id,
            product_id=product.id,
            quantity=item.quantity,
            price=product.price,
            total=line_total,
        )

        db.add(order_item)

        product.stock -= item.quantity

    tax = subtotal * TAX_PERCENTAGE / 100

    grand_total = subtotal + tax

    order.subtotal = subtotal
    order.tax = tax
    order.grand_total = grand_total

    save_order(db)

    refresh_order(
        db,
        order,
    )

    return order
