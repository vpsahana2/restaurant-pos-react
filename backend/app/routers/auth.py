from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.auth import (
    LoginRequest,
    RegisterRequest,
)

from app.services.auth_service import (
    login_user,
    register_user,
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):
    return register_user(
        db,
        request.full_name,
        request.email,
        request.password,
    )


@router.post("/login")
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):
    return login_user(
        db,
        request.email,
        request.password,
    )