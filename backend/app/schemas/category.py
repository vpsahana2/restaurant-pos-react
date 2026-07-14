from typing import Optional

from pydantic import BaseModel
from pydantic import ConfigDict


class CategoryBase(BaseModel):
    name: str
    image: Optional[str] = None


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(BaseModel):
    name: Optional[str] = None
    image: Optional[str] = None


class CategoryResponse(CategoryBase):
    id: int

    model_config = ConfigDict(from_attributes=True)