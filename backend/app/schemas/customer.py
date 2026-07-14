from typing import Optional

from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import EmailStr
from pydantic import Field


class CustomerBase(BaseModel):
    full_name: str = Field(min_length=2, max_length=150)
    phone: str = Field(min_length=8, max_length=20)
    email: Optional[EmailStr] = None


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None


class CustomerResponse(CustomerBase):
    id: int

    model_config = ConfigDict(from_attributes=True)