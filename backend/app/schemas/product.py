from decimal import Decimal
from typing import Optional

from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import Field


class ProductBase(BaseModel):
    name: str = Field(min_length=2, max_length=200)
    description: Optional[str] = None
    price: Decimal = Field(gt=0)
    stock: int = Field(ge=0)
    image: Optional[str] = None
    category_id: int


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[Decimal] = None
    stock: Optional[int] = None
    image: Optional[str] = None
    category_id: Optional[int] = None


class ProductResponse(ProductBase):
    id: int

    model_config = ConfigDict(from_attributes=True)