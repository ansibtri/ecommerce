import { Link } from 'react-router-dom'
import './orders.css'
import Tables from '../../../../shared/components/tables/Tables'
import order from '../../../../data/Orders'
const Orders = () => {
  const title = {
    "title": ["Order", "Date", "Status", "Total", "Action"],
  }
  const data = []
  return (
    <>
        <div className='order-section display-flex flex-row justify-content-space-between align-items-center'>
          <Link to="/shop" className='btn btn-primary'>BROWSE PRODUCTS</Link>
          <p>Ordering from us is always easy and safe</p>

        </div>
        <Tables columntitle={title} order={order}/>

    </>
  )
}

export default Orders