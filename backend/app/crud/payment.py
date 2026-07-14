from sqlalchemy.orm import Session

from app.models.payment import Payment


def create_payment(
    db: Session,
    payment: Payment,
):
    db.add(payment)
    db.commit()
    db.refresh(payment)

    return payment