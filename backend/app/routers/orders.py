from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.order import (
    OrderCreate,
    OrderResponse,
)

from app.services.order_service import (
    create_order_service,
)

router = APIRouter(
    prefix="/api/orders",
    tags=["Orders"],
)


@router.post(
    "",
    response_model=OrderResponse,
)
def create_order(
    request: OrderCreate,
    db: Session = Depends(get_db),
):
    return create_order_service(
        db,
        request,
    )