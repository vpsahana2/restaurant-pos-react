from sqlalchemy.orm import Session, joinedload

from app.models.order import Order
from app.models.order_item import OrderItem


def create_order(
    db: Session,
    order: Order,
):
    db.add(order)
    db.flush()

    return order


def save_order(db: Session):
    db.commit()


def refresh_order(
    db: Session,
    order: Order,
):
    db.refresh(order)


def get_orders(db: Session):
    return (
        db.query(Order)
        .options(
            joinedload(Order.customer),
            joinedload(Order.items).joinedload(OrderItem.product),
        )
        .order_by(Order.id.desc())
        .all()
    )


def get_order(
    db: Session,
    order_id: int,
):
    return (
        db.query(Order)
        .options(
            joinedload(Order.customer),
            joinedload(Order.items).joinedload(OrderItem.product),
        )
        .filter(Order.id == order_id)
        .first()
    )