from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.category import (
    CategoryCreate,
    CategoryResponse,
    CategoryUpdate,
)

from app.services.category_service import (
    create_category_service,
    delete_category_service,
    get_categories_service,
    get_category_service,
    update_category_service,
)

router = APIRouter(
    prefix="/api/categories",
    tags=["Categories"],
)


@router.get(
    "",
    response_model=list[CategoryResponse],
)
def get_categories(
    db: Session = Depends(get_db),
):
    return get_categories_service(db)


@router.get(
    "/{category_id}",
    response_model=CategoryResponse,
)
def get_category(
    category_id: int,
    db: Session = Depends(get_db),
):
    return get_category_service(
        db,
        category_id,
    )


@router.post(
    "",
    response_model=CategoryResponse,
)
def create_category(
    request: CategoryCreate,
    db: Session = Depends(get_db),
):
    return create_category_service(
        db,
        request,
    )


@router.put(
    "/{category_id}",
    response_model=CategoryResponse,
)
def update_category(
    category_id: int,
    request: CategoryUpdate,
    db: Session = Depends(get_db),
):
    return update_category_service(
        db,
        category_id,
        request,
    )


@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db),
):
    delete_category_service(
        db,
        category_id,
    )

    return {
        "message": "Category deleted successfully"
    }