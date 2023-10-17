import './address.css'

import Addressform from './component/form/Addressform'
const Address = () => {
  return (
    <>
      <div className='address'>
        <p className='pl-3'>The following addresses will be used on the checkout page by default.</p>
        <div className="address-containers">
          {/* if customer has not setuped address then billing address and shipping addresss is asked */}
          <div className="address-container-card">
            <div className="address-container-head">
              <h3>Billing address</h3>
              <button className="btn btn-primary-outline">Add</button>
            </div>
            <p>You have not set up this type of address yet.</p>
          </div>
          {/* Shipping Address  */}
          <div className="address-container-card">
            <div className='address-container-head'>
              <h3>Shipping Address</h3>
              <button className="btn btn-primary-outline">Add</button>
            </div>
            <p>You have not set up this type of address yet.</p>
          </div>

          {/* if customer has setuped address then billing address and shipping addresss is shown */}

          {/* billing Address  */}
          <Addressform formname="Billing Address" action="#" method="post"/>

          {/* shipping Address  */}
          <Addressform formname="Shipping Address" action="#" method="post"/>
        </div>
      </div>
    </>
  )
}

export default Address