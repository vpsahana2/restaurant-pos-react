from pydantic import BaseModel


class DashboardReportResponse(BaseModel):
    total_sales: float

    total_orders: int

    total_customers: int

    total_products: int

    cash_sales: float

    card_sales: float

    upi_sales: float