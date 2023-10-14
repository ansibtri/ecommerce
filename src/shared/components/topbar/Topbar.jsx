import React from 'react';
import './topbar.css';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="display-flex flex-row justify-content-space-around align-items-center p-2">
                <ul className="contact-list display-flex flex-row justify-content-space-even gap-3 w-75">
                    <li className="text-sm font-medium">
                        <i className="fa-solid fa-location-dot pr-2"></i>
                        <span>Wilson, KS 67490</span>
                    </li>
                    <li className="text-sm font-medium">
                        <i className="fa-solid fa-envelope pr-2"></i>
                        <span>test@test.com</span>
                    </li>
                    <li className="text-sm font-medium">
                        <i className="fa-solid fa-envelope pr-2"></i>
                        <span>24/7 Customer Support</span>
                    </li>
                </ul>
                <ul className="social-links display-flex flex-row gap-2 justify-content-center">
                    <li className='rounded display-flex justify-content-center align-items-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook" style={{"color":"#fff"}}></i></a>
                    </li>
                    <li className='rounded display-flex justify-content-center align-items-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" style={{"color":"#fff"}}></i></a>
                    </li>
                    <li className='rounded display-flex justify-content-center align-items-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" style={{"color":"#fff"}}></i></a>
                    </li>
                    <li className='rounded display-flex justify-content-center align-items-center'>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-shopify" style={{"color":"#fff"}}></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar