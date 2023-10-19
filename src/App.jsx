import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Topbar from './shared/components/topbar/Topbar';
import Navbar from './shared/components/navbar/Navbar';
import Footer from './shared/components/footer/Footer';
// Pages 
import Home from './pages/home/Home'
import Account from './pages/account/Account';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Notfound from './pages/notfound/Notfound';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
// Account Pages Components 
// import Dashboard from './pages/account/component/dashboard/Dashboard';
import Orders from './pages/account/component/orders/Orders';
import Address from './pages/account/component/address/Address';
import Payment from './pages/account/component/payment/Payment';
import Profile from './pages/account/component/profile/Profile';
import Authenticate from './pages/authenticate/Authenticate';
const App = () => {
  const action = () => {
    console.log('clicked')
  }
  return (
    <>
      <BrowserRouter>
        <header>
          <Topbar />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:category" exact element={<Shop />} />
          <Route path="/product/:slug" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/authenticate" exact element={<Authenticate/>} />
          {/* Nested Routing inside Account Component  */}
          <Route path="/account" exact element={<Account/>} />
          <Route exact path="/account/orders" element={<Account component={ <Orders />} />}/>
          <Route exact path="/account/address" element={<Account component={ <Address />} />} />
          <Route exact path="/account/payment" element={<Account component={ <Payment />} />} />
          <Route exact path="/account/profile" element={<Account component={ <Profile />} />} />
          <Route exact path="/logout" element={<h1>Logout</h1>} />

          {/* load this page when no route matches  */}
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
