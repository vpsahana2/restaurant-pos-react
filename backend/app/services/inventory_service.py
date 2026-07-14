from fastapi import HTTPException

from app.crud.product import (
    get_product_by_id,
    update_stock,
)


def validate_stock(
    db,
    product_id: int,
    quantity: int,
):
    product = get_product_by_id(
        db,
        product_id,
    )

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    if product.stock < quantity:
        raise HTTPException(
            status_code=400,
            detail=f"{product.name} has insufficient stock",
        )

    return product


def reduce_stock(
    db,
    product_id: int,
    quantity: int,
):
    product = validate_stock(
        db,
        product_id,
        quantity,
    )

    product.stock -= quantity

    update_stock(
        db,
        product,
    )