from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.report import DashboardReportResponse

from app.services.report_service import (
    get_dashboard_report_service,
)

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"],
)


@router.get(
    "/dashboard",
    response_model=DashboardReportResponse,
)
def dashboard_report(
    db: Session = Depends(get_db),
):
    return get_dashboard_report_service(db)