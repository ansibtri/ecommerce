import './tables.css'
const Tables = ({ columntitle, order }) => {
    const title = columntitle.title;
    return (
        <table>
            <thead>
                <tr>
                    {Array.from(title).map((item, index) => {
                        return <th key={index}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {order.map((item, index) => {
                    const status = item["order_status"];
                    return ( <tr key={index}>
                        <td className='id'>{item["order_id"]}</td>
                        <td className='order-date'>{item["order_date"]}</td>
                        <td className={'order-status '+status.toLowerCase()}>{status}</td>
                        <td className='order-total'>{item["order_total"]}</td>
                        <td><button className='btn btn-primary-outline'>View</button></td>
                    </tr>)
                   
                })}
            </tbody>
        </table>
    )
}

export default Tables