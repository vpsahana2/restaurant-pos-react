from pydantic import BaseModel
from pydantic import ConfigDict


class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int


class OrderCreate(BaseModel):
    customer_id: int
    payment_method: str

    items: list[OrderItemCreate]


class OrderResponse(BaseModel):
    id: int
    subtotal: float
    tax: float
    grand_total: float

    model_config = ConfigDict(
        from_attributes=True
    )