from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.product import (
    ProductCreate,
    ProductResponse,
    ProductUpdate,
)

from app.services.product_service import (
    create_product_service,
    delete_product_service,
    get_product_service,
    get_products_service,
    update_product_service,
)

router = APIRouter(
    prefix="/api/products",
    tags=["Products"],
)


@router.get(
    "",
    response_model=list[ProductResponse],
)
def get_products(
    db: Session = Depends(get_db),
):
    return get_products_service(db)


@router.get(
    "/{product_id}",
    response_model=ProductResponse,
)
def get_product(
    product_id: int,
    db: Session = Depends(get_db),
):
    return get_product_service(
        db,
        product_id,
    )


@router.post(
    "",
    response_model=ProductResponse,
)
def create_product(
    request: ProductCreate,
    db: Session = Depends(get_db),
):
    return create_product_service(
        db,
        request,
    )


@router.put(
    "/{product_id}",
    response_model=ProductResponse,
)
def update_product(
    product_id: int,
    request: ProductUpdate,
    db: Session = Depends(get_db),
):
    return update_product_service(
        db,
        product_id,
        request,
    )


@router.delete("/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
):
    delete_product_service(
        db,
        product_id,
    )

    return {
        "message": "Product deleted successfully"
    }