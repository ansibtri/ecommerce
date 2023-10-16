// page banner component
import React from 'react'
import './banner.css'
const Banner = ({title,image}) => {
  return (
    <div className="page-banner" style={{"--page-banner-img":"url('"+image+"')"}}>
        <div className="display-flex flex-row justify-content-center align-items-center page-banner-content" >
            <hr/>
            <h2>{title}</h2>
            <hr/>
        </div>
    </div>
  )
}

export default Banner