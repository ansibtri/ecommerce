import React from 'react'
import './review.css'
const Review = () => {
  return (
    <>
      <div className="review__container">
        <div className="review__container--head">
          <h4>4 reviews for MEN'S WHITE TSHIRT</h4>
          <div className="review__container--search display-flex flex-row justify-content-center align-items-center">
            <div className="review__container--search-input">
              <input type="text" placeholder="Search" />
            </div>
            <div className="review__container--search-btn">
              <button className='submit-btn'><span>Search</span></button>
            </div>

          </div>
        </div>
        <div className="review__contaienr--body">
          <div className="review__container--filter">
            <p>1-4 of 4 reviews</p>
            <select>
              <option>Most Recent</option>
              <option>Lowest Rating</option>
              <option>Highest Rating</option>
            </select>
          </div>
          <div className="review__container--review--details">
            <div className="review__container--review--details--item">
              <div className="review__container--review--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="review__container--review--details--item--head display-grid grid-2">
                <div className="review__owner--id--verify--section display-flex flex-column justify-content-start gap-1">
                  <h4>John Doe</h4>
                  <p>Verified Owner</p>
                </div>
                <p className='text-right review__date'>April 10, 2021</p>
                <div className="review__container--review--details--item--head--right py-2">
                  <div className="review__container--review--details--item--head--right--rating">
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
                <div className="review__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
            <div className="review__container--review--details--item">
              <div className="review__container--review--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="review__container--review--details--item--head display-grid grid-2">
                <div className="review__owner--id--verify--section display-flex flex-column justify-content-start gap-1">
                  <h4>John Doe</h4>
                  <p>Verified Owner</p>
                </div>
                <p className='text-right review__date'>April 10, 2021</p>
                <div className="review__container--review--details--item--head--right py-2">
                  <div className="review__container--review--details--item--head--right--rating">
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
                <div className="review__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
            <div className="review__container--review--details--item">
              <div className="review__container--review--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="review__container--review--details--item--head display-grid grid-2">
                <div className="review__owner--id--verify--section display-flex flex-column justify-content-start gap-1">
                  <h4>John Doe</h4>
                  <p>Verified Owner</p>
                </div>
                <p className='text-right review__date'>April 10, 2021</p>
                <div className="review__container--review--details--item--head--right py-2">
                  <div className="review__container--review--details--item--head--right--rating">
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span className="product__review--star"><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
                {/* <div className="review__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review