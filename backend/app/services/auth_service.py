from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)

from app.crud.user import (
    create_user,
    get_user_by_email,
)

from app.models.user import User


def register_user(
    db: Session,
    full_name: str,
    email: str,
    password: str,
):
    existing = get_user_by_email(
        db,
        email,
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    user = User(
        full_name=full_name,
        email=email,
        password=hash_password(password),
    )

    return create_user(
        db,
        user,
    )


def login_user(
    db: Session,
    email: str,
    password: str,
):
    user = get_user_by_email(
        db,
        email,
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    if not verify_password(
        password,
        user.password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    token = create_access_token(
        {
            "sub": user.email,
            "role": user.role,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }