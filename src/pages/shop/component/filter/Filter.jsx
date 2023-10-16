import React, { useState } from 'react';
import './filter.css';
const Filter = () => {
    const [isFilterActive, setIsFilterActive] = useState(false)
    return (
        <>
            <div className="filter-product">
                <div className="filter-product__head">
                    <h4>Filter</h4>
                    <button className="filter-content__button" onClick={()=>{setIsFilterActive(!isFilterActive)}}><i className="fa-solid fa-filter"></i></button>
                </div>
                <form className={isFilterActive?"filter-container active":"filter-container"}>
                    <div className="filter-content">
                    <div className="mb-3 display-flex flex-row justify-content-space-between align-items-center">
                    <h4>FILTER BY PRICE</h4>
                    <button className="filter-content__button">filter</button>
                    </div>
                        <div className="filter-price">
                            <label htmlFor="min-price">Min: <input type="number" className="price" name="min-price" id="min-price" /></label>
                            <span className="separator mx-2 display-flex flex-row justify-content-center align-items-center"> - </span>
                            <label htmlFor="max-price">Max: <input type="number" className="price " name="max-price" id="max-price" /></label>
                        </div>
                    </div>
                    <div className="filter-content">
                    <h4 className='my-3'>Sort Product</h4>
                    <select name="select" id="select" className="filter-category">
                        <option value="select">Low to High</option>
                        <option value="select">High to Low</option>
                        <option value="select" selected>Default</option>
                    </select>
                   
                    </div>
                    <div className="filter-content">
                    <h4 className='my-3'>Product Categories</h4>
                    <div className="product-category">
                        <label htmlFor="category1">
                            <input type="checkbox" name="category1" id="category1" /> Accessories</label>
                    </div>
                    <div className="product-category">
                        <label htmlFor='category2'>
                            <input type="checkbox" name="category2" id="category2" /> Men's Shirt</label>
                    </div>
                    <div className="product-category">
                        <label htmlFor="category3">
                            <input type="checkbox" name="category3" id="category3" /> Women's Shirt</label>
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter