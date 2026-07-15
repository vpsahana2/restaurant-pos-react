from sqlalchemy.orm import Session
from sqlalchemy.orm import joinedload
from app.models.order import Order


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
            joinedload(Order.items),
            joinedload(Order.customer),
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
            joinedload(Order.items),
            joinedload(Order.customer),
        )
        .filter(Order.id == order_id)
        .first()
    )