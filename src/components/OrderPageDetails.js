import React from 'react'
import { withRouter } from 'react-router-dom';
import PlaceOrderCart from '../components/PlaceOrderCart';
import '../css/placeOrder.css'
function OrderPageDetails({history,order}) {



    return (<>
	<div className="ordertableContainer"  style={{ color: "#007bff",width:' fit-content' }}>
	<div >Order Id({order._id})</div>
</div>
       <div className="orderContainer">
            
            <div><div className="ordertableContainer">
							<div style={{ color: "#007bff" }}>Shipping</div>
								<div>{order.shippingAddress.address}</div>
								<div>Delievery Status: {order.isDelevered?'Delievered' : 'Not Delievered'}</div>
						</div>
                        <div className="ordertableContainer">
							<div style={{ color: "#007bff" }}>Payment Method</div>
								<div>{order.paymentMethod === "Paypal" ? 'Paypal or Credit Card' : order.paymentMethod}</div>
								<div>
									{order.isPaid ? <div>Paid At: {new Date(order.paidAt).toLocaleString()}</div> : 'To be Paid'}
								</div>
						</div>
						<div className="tableContainer">
							<div style={{ color: "#007bff" }}>Order Items</div>
							{
								order.orderItems.map((item, i) => <PlaceOrderCart item={item} key={i} />)
                            }
						</div></div>
                        
						<div className="orderSummary">
							<div style={{ color: "#007bff" }}>
								Order Summary 
							</div>
						 <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Items</div>	<div>{order.orderItems.length}</div>
							</div>
                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Tax</div>	<div>₹{order.taxPrice}</div> 
							</div>
                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Shipping</div>	<div>₹{order.shippingPrice}</div> 
							</div>

                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Total</div>	<div>₹{order.totalPrice}</div> 
							</div>
						 </div> 
            
        </div>
    </>)
}

export default withRouter(OrderPageDetails)
