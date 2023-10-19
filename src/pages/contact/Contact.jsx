import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
import Banner from '../../shared/components/banner/Banner'
import Sociallinks from '../../shared/components/sociallinks/Sociallinks'
import Input from '../../shared/components/inputs/Input'
import Textarea from '../../shared/components/textarea/Textarea'
const Contact = () => {
  return (
    <>
      <main>
        <Banner title="Contact" image="/assets/creative_bg1.jpg"/>
            <h4 className='contact-title text-center'>GET IN TOUCH</h4>
        <div className="contact-us">
          <div className="contact-menu">
            <h4>Generic Contact</h4>
            <ul className='py-3'>
              <li className='py-2'><Link to="tel:000000000">000-000-000</Link></li>
              <li className='py-2'><Link to="mailto:contact@onlinepasal.com">contact@onlinepasal.com</Link></li>
              <Sociallinks classes={"py-3 w-50 justify-content-start"}/>
            </ul>
          </div>
          <form className="contact-form">
            <div className="form-section">
              <div className="display-grid grid-2">
                <Input type="text" name="firstname" label="First Name" required="required"/>
                <Input type="text" name="lastname" label="Last Name" required="required"/>
                <Input tyoe="email" name="email" label="Email" required="required"/>
                <Input type="text" name="phone" label="Phone" required="required"/>
                <Textarea name="description" label="Message" cols="100" rows="7"/>
              </div>
                <button className='btn btn-primary contact-btn'>Submit</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact