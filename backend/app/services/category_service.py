from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.crud.category import (
    create_category,
    delete_category,
    get_categories,
    get_category,
    update_category,
)

from app.models.category import Category

from app.schemas.category import (
    CategoryCreate,
    CategoryUpdate,
)


def create_category_service(
    db: Session,
    request: CategoryCreate,
):
    category = Category(**request.model_dump())

    return create_category(db, category)


def get_categories_service(db: Session):
    return get_categories(db)


def get_category_service(
    db: Session,
    category_id: int,
):
    category = get_category(db, category_id)

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found",
        )

    return category


def update_category_service(
    db: Session,
    category_id: int,
    request: CategoryUpdate,
):
    category = get_category(db, category_id)

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found",
        )

    for key, value in request.model_dump(
        exclude_unset=True
    ).items():
        setattr(category, key, value)

    return update_category(db, category)


def delete_category_service(
    db: Session,
    category_id: int,
):
    category = get_category(db, category_id)

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found",
        )

    delete_category(db, category)