from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.customer import (
    CustomerCreate,
    CustomerResponse,
    CustomerUpdate,
)

from app.services.customer_service import (
    create_customer_service,
    delete_customer_service,
    get_customer_service,
    get_customers_service,
    update_customer_service,
)

router = APIRouter(
    prefix="/api/customers",
    tags=["Customers"],
)


@router.get(
    "",
    response_model=list[CustomerResponse],
)
def get_customers(
    db: Session = Depends(get_db),
):
    return get_customers_service(db)


@router.get(
    "/{customer_id}",
    response_model=CustomerResponse,
)
def get_customer(
    customer_id: int,
    db: Session = Depends(get_db),
):
    return get_customer_service(
        db,
        customer_id,
    )


@router.post(
    "",
    response_model=CustomerResponse,
)
def create_customer(
    request: CustomerCreate,
    db: Session = Depends(get_db),
):
    return create_customer_service(
        db,
        request,
    )


@router.put(
    "/{customer_id}",
    response_model=CustomerResponse,
)
def update_customer(
    customer_id: int,
    request: CustomerUpdate,
    db: Session = Depends(get_db),
):
    return update_customer_service(
        db,
        customer_id,
        request,
    )


@router.delete("/{customer_id}")
def delete_customer(
    customer_id: int,
    db: Session = Depends(get_db),
):
    delete_customer_service(
        db,
        customer_id,
    )

    return {
        "message": "Customer deleted successfully"
    }