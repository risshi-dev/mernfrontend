import React from 'react' 
import {Link, withRouter} from 'react-router-dom'

function OrderId({order,history}) {
    return (
        <div className='allOrders'>
            
                    {order.reverse().map(item => <div className='allOrderContainer'>
                        <div onClick = {() => history.push(`order/${item._id}`)}>{item.orderItems.map((order,index) => `${order.name}`)}</div>
                        <div>{item.isPaid ? 'Paid' : 'Not Paid'}</div>
                        <div>{item.isDeliverd ? 'Delivered' : 'Not Delivered'}</div>
                    </div>)}
                
        </div>
    )
}

export default withRouter(OrderId)
