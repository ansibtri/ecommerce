import React from 'react'
import './account.css';
import Banner from '../../shared/components/banner/Banner';
import Panellinks from './component/panellinks/Panellinks';
import { Link } from 'react-router-dom';
const Account = ({component}) => {
  return (
    <>
      <Banner image={"./assets/01_Home13.jpg"} title="ACCOUNt" />
      <div className="user-panel">
        <div className="user-container">
          <div className="user-panel-left">
            <Panellinks/>
          </div>
          <div className="user-panel-right">

            {component ? component : <div className="dashboard-content">
            <p>Hello admin (not admin? Log out)</p>
            <p>From your account dashboard you can view your <Link to="/account/orders">recent orders</Link>, manage your <Link to="/account/address">shipping and billing addresses</Link>, and <Link to="/account/profile">edit your password and account details.</Link></p>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Account