import React from 'react'
import './features.css'

const Features = () => {
    return (
        <div>
            <div className="display-grid grid-4 gap-3 features__service">
                <div className="features__service--item display-flex flex-row justify-content-center align-items-center gap-3">
                    <div className="features__service--item-icon">
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className="features__service--item-text">
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
                <div className="features__service--item display-flex flex-row justify-content-center align-items-center gap-3">
                    <div className="features__service--item-icon">
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="features__service--item-text">
                        <h3>Money Guarantee</h3>
                        <p>30 days money back guarantee</p>
                    </div>
                </div>
                <div className="features__service--item display-flex flex-row justify-content-center align-items-center gap-3">
                    <div className="features__service--item-icon">
                        <i className="fas fa-headset"></i>
                    </div>
                    <div className="features__service--item-text">
                        <h3>Online Support</h3>
                        <p>Support 24 hours a day</p>
                    </div>
                </div>
                <div className="features__service--item display-flex flex-row justify-content-center align-items-center gap-3">
                    <div className="features__service--item-icon">
                        <i className="fas fa-sync"></i>
                    </div>
                    <div className="features__service--item-text">
                        <h3>Free Return</h3>
                        <p>Return within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features