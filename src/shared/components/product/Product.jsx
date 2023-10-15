import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
    <>
    <div className="product">
        <div className="product__image">
            <img src={product["product_image"]} alt="product" />
        </div>
        <Link to={`/product/${product["product_id"]}`} className="product__name">
        <div className="product__info text-center">
            <p className='product__info--category'>{product["product_category"]}</p>
            <h2 className='product__info--title'>{product["product_name"]}</h2>
            <div className='product__price'>
                {(product["product_sale"] === 0) ? 
                <div className='product__price'>
                  <span className='product__price--sale'>${product["product_price"]}</span>
                </div>:
                <div className='product__price'>
                    <span className='product__price--original'>${product["product_price"]}</span>
                    <span className='product__price--sale'>${product["product_sale"]}</span>
                  </div>
                }
            </div>
            <button className='btn btn-primary px-4 py-2 product__cart--button'>Add to cart</button>
        </div>
          </Link>
    </div>
    </>
  )
}

export default Product