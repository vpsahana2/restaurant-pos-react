from sqlalchemy.orm import Session

from app.crud.report import get_dashboard_report


def get_dashboard_report_service(
    db: Session,
):
    return get_dashboard_report(db)