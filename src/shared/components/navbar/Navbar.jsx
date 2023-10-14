import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Button from '../button/Button';
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <nav className='display-flex flex-row justify-content-space-around p-2 nav'>
      <div className="nav-logo">
        <a href="#" className="brand-logo">OnlinePasal</a>
      </div>
      <div className="w-25 display-flex flex-row align-items-center nav-wrapper ">
        <ul className="display-flex flex-row justify-content-space-between w-100 align-items-center right hide-on-med-and-down">
          <li><Link to="/" className={location.pathname === "/" ? 'active':null}>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-wrapper__button display-flex flex-row gap-1">
        <a href="#" className="">
          <Button type="action" text="Shop" classes="btn-primary-outline"/>
        </a>
        <a href="#" className="">
          <Button type="action" text="Account" classes="btn-primary"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar