import React from 'react'
import './sociallinks.css'
const Sociallinks = ({classes}) => {
    return (
        <ul className={"social-links display-flex flex-row gap-2 "+classes}>
            <li className='rounded display-flex justify-content-center align-items-center'>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook" style={{ "color": "#fff" }}></i></a>
            </li>
            <li className='rounded display-flex justify-content-center align-items-center'>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" style={{ "color": "#fff" }}></i></a>
            </li>
            <li className='rounded display-flex justify-content-center align-items-center'>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" style={{ "color": "#fff" }}></i></a>
            </li>
            <li className='rounded display-flex justify-content-center align-items-center'>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-shopify" style={{ "color": "#fff" }}></i></a>
            </li>
        </ul>
    )
}

export default Sociallinks