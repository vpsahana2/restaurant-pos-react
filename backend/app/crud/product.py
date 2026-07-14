from sqlalchemy.orm import Session

from app.models.product import Product


def create_product(db: Session, product: Product):
    db.add(product)
    db.commit()
    db.refresh(product)
    return product


def get_product(db: Session, product_id: int):
    return (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )


def get_products(
    db: Session,
    skip: int = 0,
    limit: int = 20,
):
    return (
        db.query(Product)
        .offset(skip)
        .limit(limit)
        .all()
    )


def update_product(db: Session, product: Product):
    db.commit()
    db.refresh(product)
    return product


def delete_product(db: Session, product: Product):
    db.delete(product)
    db.commit()
    
    
def get_product_by_id(
    db,
    product_id: int,
):
    return (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )


def update_stock(
    db,
    product: Product,
):
    db.commit()
    db.refresh(product)

    return product