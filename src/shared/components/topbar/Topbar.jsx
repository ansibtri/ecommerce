import React from 'react';
import './topbar.css';
import Sociallinks from '../sociallinks/Sociallinks';
const Topbar = () => {
    return (
        <>
        <div className='topbar'>
            <div className="display-flex flex-row justify-content-space-between align-items-center py-2">
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
                <Sociallinks classes="justify-content-center"/>
            </div>
        </div>
        </>
    )
}

export default Topbar