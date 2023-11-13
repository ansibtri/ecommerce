import React from 'react'
import './form.css'
import Login from './login/Login'
import Signup from './signup/Signup'
import Accountrecover from './accountrecover/Accountrecover'
const Form = ({modalType}) => {

  return (
    <>
    {modalType === "login" ? <Login /> : null}
    {modalType === "signup" ? <Signup /> : null}
    {modalType === "accountrecover" ? <Accountrecover /> : null}
    </>
  )
}

export default Form