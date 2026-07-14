from sqlalchemy import (
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
)

from sqlalchemy.sql import func

from app.database.base import Base


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True)

    order_id = Column(
        Integer,
        ForeignKey("orders.id"),
    )

    payment_method = Column(
        String(50),
    )

    amount = Column(
        Float,
    )

    payment_status = Column(
        String(50),
        default="Paid",
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )