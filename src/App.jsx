import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './shared/components/topbar/Topbar';
import Navbar from './shared/components/navbar/Navbar';
import Footer from './shared/components/footer/Footer';
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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
