import React from 'react'
import './form.css'
import Login from './login/Login'
import Signup from './signup/Signup'
const Form = ({type}) => {
  return (
    <>
    {type === "login" ? <Login /> : null}
    {type === "signup" ? <Signup /> : null}
    </>
  )
}

export default Form