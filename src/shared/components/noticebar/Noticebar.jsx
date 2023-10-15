import React from 'react'
import './noticebar.css'
const Noticebar = ({text}) => {
  return (
    <div className='text-center p-1 notice-bar'>
        {text}
    </div>
  )
}

export default Noticebar