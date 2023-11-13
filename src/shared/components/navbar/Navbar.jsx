import React, { useState,useContext } from 'react'
import ModalContext from '../modal/modalContext/ModalContext';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Form from '../forms/Form';

const Navbar = () => {
  const {showModal,setShowModal,modalType,setModalType} = useContext(ModalContext);
  const isLoggedIn = false;
  // check location to make menu active when clicked
  const location = useLocation(); // useLocation() returns the location object that represents the current URL.
  const [isActive, setIsActive] = useState(false); // disable navbar when clicked on link in mobile view
  const disableNavbar = () => {
    setIsActive(false)
  }
  const handleModal = () => {
    setShowModal(!showModal);
    setModalType('login')
  }
  
  return (
    <>
    <nav className='nav'>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="brand-logo">OnlinePasal</Link>
        </div>
        <div className={isActive ? "nav-wrapper active" : "nav-wrapper"}>
          <div className="nav-list">
            <ul className="nav-list-menu">
              <li><Link to="/" className={location.pathname === "/" ? 'active' : null} onClick={disableNavbar}>Home</Link></li>
              <li><Link to="/shop" className={location.pathname === "/shop" ? 'active' : null} onClick={disableNavbar}>Shop</Link></li>
              <li><Link to="/about" className={location.pathname === "/about" ? 'active' : null} onClick={disableNavbar}>About</Link></li>
              <li><Link to="/contact" className={location.pathname === "/contact" ? 'active' : null} onClick={disableNavbar}>Contact</Link></li>
              <li><Link to="/cart" className={location.pathname === "/cart" ? 'active' : null}  onClick={disableNavbar}>Cart</Link></li>
            </ul>
          </div>
          <div className="nav-wrapper__button display-flex flex-row gap-2">
            <Link to="/shop" className="">
              <Button type="action" text="Shop" classes="btn-primary-outline" />
            </Link>
            <Link to={isLoggedIn ? "/account":handleModal} className="">
              <Button type="button" text="Account" classes="btn-primary" action={isLoggedIn !== true ? handleModal:null}/>
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
    <Modal showModal={showModal} children={<Form modalType={modalType}/>} setModalType={setModalType} setShowModal={setModalType} />
    </>
  )
}

export default Navbar;