import React from 'react'
import './questions.css'
const Review = () => {
  return (
    <>
      <div className="questions__container">
        <div className="questions__container--head">
          <div className="questions__container--head--title">
          <h4>Questions & Answer</h4>
          <div className="questions__container--ask-btn">
              <button className='submit-btn'><span>Ask a Question</span></button>
            </div>
          </div>
          <div className="questions__container--search display-flex flex-row justify-content-center align-items-center">
            <div className="questions__container--search-input">
              <input type="text" placeholder="Search" />
            </div>
            

          </div>
        </div>
        <div className="questions__container--body">
          <div className="questions__container--questions--details">
            <div className="questions__container--questions--details--item">
              <div className="questions__container--questions--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="questions__container--questions--details--item--head display-grid grid-2">
                <div className="questions__owner--id--verify--section display-flex flex-row justify-content-start align-items-center gap-1">
                  <h4>John Doe</h4>
                <p className='text-right questions__date'>April 10, 2021</p>
                </div>
                <div className="questions__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
            <div className="questions__container--questions--details--item">
              <div className="questions__container--questions--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="questions__container--questions--details--item--head display-grid grid-2">
                <div className="questions__owner--id--verify--section display-flex flex-row justify-content-start align-items-center gap-1">
                  <h4>John Doe</h4>
                <p className='text-right questions__date'>April 10, 2021</p>
                </div>
                <div className="questions__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
            <div className="questions__container--questions--details--item">
              <div className="questions__container--questions--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="questions__container--questions--details--item--head display-grid grid-2">
                <div className="questions__owner--id--verify--section display-flex flex-row justify-content-start align-items-center gap-1">
                  <h4>John Doe</h4>
                <p className='text-right questions__date'>April 10, 2021</p>
                </div>
                <div className="questions__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
            <div className="questions__container--questions--details--item">
              <div className="questions__container--questions--user--image">
                <img src="/assets/11_1.jpg" alt="user" />
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="questions__container--questions--details--item--head display-grid grid-2">
                <div className="questions__owner--id--verify--section display-flex flex-row justify-content-start align-items-center gap-1">
                  <h4>John Doe</h4>
                <p className='text-right questions__date'>April 10, 2021</p>
                </div>
                <div className="questions__description">
                  <p>Thank you Ultima ❤️ I got my order.. I can Understand it’s take time because of huge Delivery and orders.. but Satisfied with the Nepali product and it’s quality ❤️ Hope for Best future ❤️and promote local brands 🥰 Good long life battery with good quality Sound.. For rating 9.9/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review