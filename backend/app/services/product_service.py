from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.crud.product import (
    create_product,
    delete_product,
    get_product,
    get_products,
    update_product,
)

from app.models.product import Product

from app.schemas.product import (
    ProductCreate,
    ProductUpdate,
)


def create_product_service(
    db: Session,
    request: ProductCreate,
):
    product = Product(**request.model_dump())

    return create_product(db, product)


def get_products_service(db: Session):
    return get_products(db)


def get_product_service(
    db: Session,
    product_id: int,
):
    product = get_product(db, product_id)

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    return product


def update_product_service(
    db: Session,
    product_id: int,
    request: ProductUpdate,
):
    product = get_product(db, product_id)

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    for key, value in request.model_dump(
        exclude_unset=True
    ).items():
        setattr(product, key, value)

    return update_product(db, product)


def delete_product_service(
    db: Session,
    product_id: int,
):
    product = get_product(db, product_id)

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    delete_product(db, product)