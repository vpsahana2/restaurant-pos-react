from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.crud.customer import (
    create_customer,
    delete_customer,
    get_customer,
    get_customers,
    update_customer,
)

from app.models.customer import Customer

from app.schemas.customer import (
    CustomerCreate,
    CustomerUpdate,
)


def create_customer_service(
    db: Session,
    request: CustomerCreate,
):
    customer = Customer(**request.model_dump())

    return create_customer(db, customer)


def get_customers_service(
    db: Session,
):
    return get_customers(db)


def get_customer_service(
    db: Session,
    customer_id: int,
):
    customer = get_customer(db, customer_id)

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found",
        )

    return customer


def update_customer_service(
    db: Session,
    customer_id: int,
    request: CustomerUpdate,
):
    customer = get_customer(db, customer_id)

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found",
        )

    for key, value in request.model_dump(
        exclude_unset=True
    ).items():
        setattr(customer, key, value)

    return update_customer(db, customer)


def delete_customer_service(
    db: Session,
    customer_id: int,
):
    customer = get_customer(db, customer_id)

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found",
        )

    delete_customer(db, customer)