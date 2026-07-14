from sqlalchemy.orm import Session

from app.models.order import Order


def create_order(
    db: Session,
    order: Order,
):
    db.add(order)
    db.commit()
    db.refresh(order)

    return order


def get_orders(db: Session):
    return db.query(Order).all()


def get_order(
    db: Session,
    order_id: int,
):
    return (
        db.query(Order)
        .filter(Order.id == order_id)
        .first()
    )