import React from 'react'
import './banner.css';
const Banner = ({title}) => {
  return (
    <>
    <div className="banner" style={{"--banner-img":"url('/assets/shop-banner.jpg')"}}>
        <div className="display-flex flex-column justify-content-center align-items-center banner-content">
            <div className="banner-content__title">Let it Begin</div>
            <div className="banner-content__tagline">{title}</div>
            <div className="banner-content__bottom-line">Starts <span>NOW</span></div>
        </div>
    </div>
    </>
  )
}

export default Banner