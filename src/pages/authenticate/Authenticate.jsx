import React from 'react'
import './authenticate.css'
import Banner from '../../shared/components/banner/Banner'
import Form from '../../shared/components/forms/Form'
const Authenticate = () => {
  return (
    <>
    <Banner title="Authenticate" image="/assets/01_Home13.jpg"/>
    <div className="authenticate__container">
      <div className="authenticate__form">
        <Form type="login"/>
      </div>
      <div className="authenticate__form">
        <Form type="signup"/>
      </div>
    </div>
    </>
  )
}

export default Authenticate