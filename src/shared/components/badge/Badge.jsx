import React from 'react'
import './badge.css'
const Badge = ({Component}) => {
  return (
    <div className='badge'>
        {Component}
        <div className="badge-box display-flex place-items-center">
            <div className="badge-text">
                Sale!
            </div>
        </div>
    </div>
  )
}

export default Badge