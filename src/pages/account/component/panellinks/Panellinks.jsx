import { Link, useLocation } from 'react-router-dom'
import './panellinks.css'
const Panellinks = () => {
    const location = useLocation();
    return (
        <>
            <div className="user-panel-links">
                <ul>
                    <li><Link className={location.pathname ==="/account" ? "active":null} to="/account"><i className="fa fa-dashboard"></i>Dashboard</Link></li>
                    <li><Link className={location.pathname ==="/account/orders" ? "active":null} to="/account/orders"><i className="fa fa-list"></i>Orders</Link></li>
                    <li><Link className={location.pathname ==="/account/address" ? "active":null} to="/account/address"><i className="fa fa-map-marker"></i>Addresses</Link></li>
                    <li><Link className={location.pathname ==="/account/payment" ? "active":null} to="/account/payment"><i className="fa fa-unlock-alt"></i>Payment methods</Link></li>
                    <li><Link className={location.pathname ==="/account/profile" ? "active":null} to="/account/profile"><i className="fa fa-book"></i>Account Details</Link></li>
                    <li><Link to="/logout"><i className="fa fa-sign-out"></i>Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Panellinks