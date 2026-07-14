from pydantic import BaseModel
from pydantic import ConfigDict


class PaymentCreate(BaseModel):
    order_id: int
    payment_method: str
    amount: float


class PaymentResponse(PaymentCreate):
    id: int
    payment_status: str

    model_config = ConfigDict(
        from_attributes=True
    )