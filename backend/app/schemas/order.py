from datetime import datetime

from pydantic import BaseModel
from pydantic import ConfigDict


class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int


class OrderCreate(BaseModel):
    customer_id: int
    payment_method: str
    items: list[OrderItemCreate]


class OrderItemResponse(BaseModel):
    id: int
    product_id: int
    quantity: int
    price: float
    total: float

    model_config = ConfigDict(
        from_attributes=True
    )


class OrderResponse(BaseModel):
    id: int

    customer_id: int

    payment_method: str

    status: str

    subtotal: float

    tax: float

    grand_total: float

    created_at: datetime

    items: list[OrderItemResponse]

    model_config = ConfigDict(
        from_attributes=True
    )