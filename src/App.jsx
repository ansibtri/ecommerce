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
import Blog from './pages/blog/Blog';
import Notfound from './pages/notfound/Notfound';
const App = () => {
  const action = () => {
    console.log('clicked')
  }
  return (
    <>
      <BrowserRouter>
       <header>
       <Topbar />
        <Navbar/>
       </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/account" exact element={<Account />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/shop" exact element={<Shop/>} />
          <Route path="/blog" exact element={<Blog/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
