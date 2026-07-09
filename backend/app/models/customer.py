from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.base import Base


class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True)

    full_name = Column(String(150))

    phone = Column(String(50))

    email = Column(String(150))