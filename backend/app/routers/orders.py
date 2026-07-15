from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.order import (
    OrderCreate,
    OrderResponse,
)

from app.services.order_service import (
    create_order_service,
    get_order_service,
    get_orders_service,
)

router = APIRouter(
    prefix="/api/orders",
    tags=["Orders"],
)


@router.get(
    "",
    response_model=list[OrderResponse],
)
def get_orders(
    db: Session = Depends(get_db),
):
    return get_orders_service(db)


@router.get(
    "/{order_id}",
    response_model=OrderResponse,
)
def get_order(
    order_id: int,
    db: Session = Depends(get_db),
):
    return get_order_service(
        db,
        order_id,
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