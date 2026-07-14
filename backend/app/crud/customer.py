from sqlalchemy.orm import Session

from app.models.customer import Customer


def create_customer(db: Session, customer: Customer):
    db.add(customer)
    db.commit()
    db.refresh(customer)
    return customer


def get_customers(
    db: Session,
    skip: int = 0,
    limit: int = 20,
):
    return (
        db.query(Customer)
        .offset(skip)
        .limit(limit)
        .all()
    )


def get_customer(
    db: Session,
    customer_id: int,
):
    return (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )


def update_customer(
    db: Session,
    customer: Customer,
):
    db.commit()
    db.refresh(customer)
    return customer


def delete_customer(
    db: Session,
    customer: Customer,
):
    db.delete(customer)
    db.commit()