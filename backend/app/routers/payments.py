from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.payment import (
    PaymentCreate,
    PaymentResponse,
)

from app.services.payment_service import (
    create_payment_service,
)

router = APIRouter(
    prefix="/api/payments",
    tags=["Payments"],
)


@router.post(
    "",
    response_model=PaymentResponse,
)
def create_payment(
    request: PaymentCreate,
    db: Session = Depends(get_db),
):
    return create_payment_service(
        db,
        request,
    )