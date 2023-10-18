import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './productdetails.css'
import productsData from '../../../data/Products'
const ProductDetails = () => {
    console.log("h")
    // setting product quantity
    const [productQuantity, setProductQuantity] = useState({ "availableQuantity": 4, "quantity": 1 });
    console.log(productQuantity)
    const onQuantityChange = (e) => {
        setProductQuantity({ ...productQuantity, "quantity": e.target.value });
    }
    // setting button disable enable functionality
    // const [isBtnDisabled, setIsBtnDisabled] = useState({ "btnMax": false, "btnMin": true });

    // getting values from parameters
    const params = useParams();
    
    // filtering data from productsData array that exactly matches the slug
    const product = productsData.filter((item) => {
        return item.product_slug === params.slug
    })[0];

    // choose the color of the product
    const setColor = (e) => {
        const productInput = document.querySelectorAll('.product-input');
        productInput.forEach((item) => {
            item.classList.remove('active');
            item.children[0].children[0].checked = false;
        })
        e.target.closest('.product-input').classList.add('active');
        e.target.closest('.product-input').children[0].children[0].checked = true;
    }

    return (
        <>
            <div className="product-details">
                <div className="product-details__head ">
                    <div className="product-details__head--title display-flex flex-row justify-content-space-between align-items-center">
                        <h1>{product["product_name"]}</h1>
                        <button className='btn btn-primary-outline product-share-icon'><i class="fa-regular fa-share-from-square"></i></button>
                    </div>
                    <div className="product-details__head--mid">
                        <div className="product-details__head--mid--price">
                            <span className="product__original--price">Rs {product["product_price"]}</span>
                            <span className="product__discount--price">Rs {product["product_sale"]}</span>
                        </div>
                        <div className="product-details__head--review display-flex flex-row justify-content-space-between align-items-center">
                            <div className="product-details__head--review--star">
                                <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className="product__review--star"><i className="fa-regular fa-star"></i></span>
                            </div>
                            <span className="product__review">(1000 Reviews)</span>
                            <span className='pipe-divider'>|</span>
                            <span className="product__sold">35 sold</span>
                        </div>
                    </div>
                    <p className='product-excerpt'>Elevate your lifestyle with Watch Circle: 1.43″ Amoled display, 100+ sports modes, IP68 water resistance, and stylish Black & Pink options.</p>
                </div>
                <div className="product__choice">
                    <div>
                        <p>Color: <span></span></p>
                        <div className="display-flex flex-row align-items-center">
                            <div className="product-input p-1 yellow" onClick={setColor}>
                                <label htmlFor="color"><input type="radio" checked name="color" id="black" value="black" data-color="black" />Black</label>
                            </div>
                            <div className="product-input p-1 pink" onClick={setColor}>
                                <label htmlFor="color"><input type="radio" checked name="color" id="pink" value="pink" data-color="pink" />Pink</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Size: <span></span></p>
                        <div className="display-flex flex-row align-items-center">
                            <div className="product-input p-1 yellow" onClick={setColor}>
                                <label htmlFor="color"><input type="radio" checked name="color" id="black" value="black" data-color="black" />Black</label>
                            </div>
                            <div className="product-input p-1 pink" onClick={setColor}>
                                <label htmlFor="color"><input type="radio" checked name="color" id="pink" value="pink" data-color="pink" />Pink</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__quantity--cart display-flex flex-row justify-content-space-between align-items-center py-3">
                    <div className=''>
                        <p className='py-3'>Quantity</p>
                        <div className="product__quantity">
                            <button className="btn-min">-</button>
                            <input type="text" value={productQuantity["quantity"]} data-max={productQuantity["availableQuantity"]} onChange={onQuantityChange} />
                            <button className='btn-max'>+</button>
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>Availability: <span className='product__availability'>In Stock</span></p>
                        <button className='btn btn-primary-outline product-cart-btn'>Add to Cart</button>
                    </div>
                </div>
                <button className='btn btn-primary product-buy-btn'>Buy Now</button>
                <p className='product__services'><i class="fa-solid fa-truck mr-3"></i> Estimated Delivery: <span>Oct 20 - 23, 2023</span></p>
            </div>
        </>
    )
    return "h"
}

export default ProductDetails