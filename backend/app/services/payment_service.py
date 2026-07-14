from sqlalchemy.orm import Session

from app.crud.payment import create_payment

from app.models.payment import Payment

from app.schemas.payment import PaymentCreate


def create_payment_service(
    db: Session,
    request: PaymentCreate,
):
    payment = Payment(
        order_id=request.order_id,
        payment_method=request.payment_method,
        amount=request.amount,
    )

    return create_payment(
        db,
        payment,
    )