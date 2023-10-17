import React from 'react'
import './input.css';
const Input = ({type, name, required,label}) => {
  return (
    <div className='form-input'>
        <label htmlFor={{name}}>{label}</label>
        <input type={{type}} name={{name}} required={{required}}/>
    </div>
  )
}

export default Input