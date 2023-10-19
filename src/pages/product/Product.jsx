import React from 'react'
import Gallery from './gallery/Gallery'
import './product.css'
import ProductDetails from './details/ProductDetails'
import Review from './review/Review'
import Specifications from './specifications/Specifications'
import Questions from './questions/Questions'

const Product = () => {
  const [tab, setTab] = React.useState('reviews')
  // function to change tabs when clicked
  const changeTabTo = (e) => {
    // setTab(tab) // this will get the value which is clicked
    // function to change the active class
    const tabs = document.querySelectorAll('.tabs__header li')
    tabs.forEach(tab => tab.classList.remove('active'))
    e.target.classList.add('active')
    setTab(e.target.dataset.tab)
  }
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
      <div className="tabs">
        <div className="tabs__header">
          <ul className='display-flex flex-row justify-content-start align-items-center'>
            <li className='active' onClick={changeTabTo} data-tab="reviews">Reviews(4)</li>
            <li onClick={changeTabTo}data-tab="specifications">Specifications</li>
            <li onClick={changeTabTo}data-tab="questions">Questions</li>
          </ul>
        </div>
        <div className="tabs__body">
          <div className="tabs__body__content">
            <div className="tabs__body__content--review">
              {tab === 'reviews' && <Review />}
            </div>
            <div className="tabs__body__content--questions">
             {tab === 'questions' && <Questions />}
            </div>
            <div className="tabs__body__content--specifications">
              {tab === 'specifications' && <Specifications />}
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Product;