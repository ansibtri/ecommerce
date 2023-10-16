import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Button from '../button/Button';
const Navbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className='nav'>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="brand-logo">OnlinePasal</Link>
        </div>
        <div className={isActive ? "nav-wrapper active" : "nav-wrapper"}>
          <div className="nav-list">
            <ul className="nav-list-menu">
              <li><Link to="/" className={location.pathname === "/" ? 'active' : null}>Home</Link></li>
              <li><Link to="/shop" className={location.pathname === "/shop" ? 'active' : null}>Shop</Link></li>
              <li><Link to="/about" className={location.pathname === "/about" ? 'active' : null}>About</Link></li>
              <li><Link to="/contact" className={location.pathname === "/contact" ? 'active' : null}>Contact</Link></li>
              <li><Link to="/blog" className={location.pathname === "/blog" ? 'active' : null}>blog</Link></li>
              <li><Link to="/cart" className={location.pathname === "/cart" ? 'active' : null}>Cart</Link></li>
            </ul>
          </div>
          <div className="nav-wrapper__button display-flex flex-row gap-2">
            <Link to="/shop" className="">
              <Button type="action" text="Shop" classes="btn-primary-outline" />
            </Link>
            <Link to="/account" className="">
              <Button type="action" text="Account" classes="btn-primary" />
            </Link>
          </div>
        </div>
        <div className="nav-menu" onClick={() => setIsActive(!isActive)}>
          <div className="nav-menu-item"></div>
          <div className="nav-menu-item"></div>
          <div className="nav-menu-item"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


{/* <div className="navbar active">
        <div className="nav-logo ">
          <Link to="#" className="brand-logo">OnlinePasal</Link>
        </div>
        <div className="nav_wrapper">
          <div className="display-flex flex-row align-items-center nav-list">
            <ul className="display-flex flex-row justify-content-space-between w-100 align-items-center right hide-on-med-and-down">
              <li><Link to="/" className={location.pathname === "/" ? 'active' : null}>Home</Link></li>
              <li><Link to="/shop" className={location.pathname === "/shop" ? 'active' : null}>Shop</Link></li>
              <li><Link to="/about" className={location.pathname === "/about" ? 'active' : null}>About</Link></li>
              <li><Link to="/contact" className={location.pathname === "/contact" ? 'active' : null}>Contact</Link></li>
            </ul>
          </div>
          <div className="nav-wrapper__button display-flex flex-row gap-2">
            <a href="#" className="">
              <Button type="action" text="Shop" classes="btn-primary-outline" />
            </a>
            <a href="#" className="">
              <Button type="action" text="Account" classes="btn-primary" />
            </a>
          </div>
        </div>
        <div className="nav-menu" onClick={()=>setIsActive(!isActive)}>
          <div className="nav-menu-item"></div>
          <div className="nav-menu-item"></div>
          <div className="nav-menu-item"></div>
        </div>
      </div> */}