from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import relationship

from app.database.base import Base


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)

    name = Column(String(100), nullable=False)

    image = Column(String(255))

    products = relationship(
        "Product",
        back_populates="category",
    )