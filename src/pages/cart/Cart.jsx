import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import productsData from '../../data/Products';
import Banner from '../../shared/components/banner/Banner';
const Cart = () => {
    return (
        <>
            <Banner image="/assets/01_Home13.jpg" title="BUy products"/>
            <div className='cart_container'>
                <div className="cart_container--head">
                    <h4>Shopping Cart</h4>
                </div>
                <div className="coupon">
                <p>Use Coupon code <span className='coupon-term'>ansi</span> for 10% OFF</p>
                </div>
                <div className="cart_container--body">
                    <div className="cart_container--table">
                        <div className="table--head">
                            <div></div>
                            <div></div>
                            <div className="table--head--item">
                                <p>Product</p>
                            </div>
                            <div className="table--head--item">
                                <p>Price</p>
                            </div>
                            <div className="table--head--item">
                                <p>Quantity</p>
                            </div>
                            <div className="table--head--item">
                                <p>Subtotal</p>
                            </div>
                        </div>
                        <div className="table--body">
                           {productsData.map((product,index) => {
                            return  <div className="table--row" key={index}>
                            <div className="table--row-data">
                                <span><i className="fa-solid fa-circle-xmark"></i></span>
                            </div>
                            <div className="tabl--row-data">
                                <img src={product["product_image"]} alt="" />
                            </div>
                            <div className="table--row-data">
                                <p className='product-name'>{productsData[0]["product_name"]}</p>
                            </div>
                            <div className="table--row-data">
                                <p>${product["product_price"]}</p>
                            </div>
                            <div className="table--row-data">
                                <p>{product["product_price"]}</p>
                            </div>
                            <div className="table--row-data">
                                <p>${product["product_price"]}</p>
                            </div>
                        </div>
                           })}
                        </div>
                        <div className="table--bottom">
                            <div className="table--bottom--left">
                                <input type="text" placeholder='Coupon Code' />
                                <button>Apply Coupon</button>
                            </div>
                            <div className="table--bottom--right">
                                <button>Update Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart_checkout--container">
                <div className="cart_checkout--head">
                    <div className="cart_checkout--head--title">
                        <h4>Cart Totals</h4>
                    </div>
                    <div className="cart_checkout--price--details">
                        <div>
                            <p>Subtotal</p>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <p>Discount</p>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <p>Shipping</p>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <p>Total</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="cart_checkout--bottom">
                        <Link to="/checkout" className='submit-btn'>Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart