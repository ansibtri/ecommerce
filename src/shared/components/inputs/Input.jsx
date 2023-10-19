import React from 'react'
import './input.css';
const Input = ({type, name, placeholder,required,label}) => {
  return (
    <div className='form-input'>
        <label htmlFor={name}>{label ? label : null}</label>
        <input type={type} name={name} required placeholder={placeholder ? placeholder:null}/>
    </div>
  )
}

export default Input