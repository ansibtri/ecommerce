import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Topbar from './shared/components/topbar/Topbar';
import Navbar from './shared/components/navbar/Navbar';
import Footer from './shared/components/footer/Footer';
import Account from './pages/account/Account';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
const App = () => {
  const action = () => {
    console.log('clicked')
  }
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/account" exact element={<Account />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/shop" exact element={<Shop/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
