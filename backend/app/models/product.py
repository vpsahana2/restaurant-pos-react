from sqlalchemy import Column
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String

from sqlalchemy.orm import relationship

from app.database.base import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)

    category_id = Column(
        Integer,
        ForeignKey("categories.id"),
    )

    name = Column(String(200), nullable=False)

    description = Column(String(500))

    image = Column(String(255))

    price = Column(Float, nullable=False)

    stock = Column(Integer, default=0)

    category = relationship(
        "Category",
        back_populates="products",
    )