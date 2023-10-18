import React from 'react'
import Gallery from './gallery/Gallery'
import './product.css'
import ProductDetails from './details/ProductDetails'

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product-container">
          <div className="photo-container">
            <Gallery />
          </div>
          <ProductDetails />
        </div>
      </div>
    </>
  )
}

export default Product;