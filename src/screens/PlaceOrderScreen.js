import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cartDetails, clearCart } from '../actions/cartAction';
import { createOrder, createRazorPayOrder, PayOrder } from '../actions/orderActions';
import PlaceOrderCart from '../components/PlaceOrderCart';
import EditIcon from '@material-ui/icons/Edit';
import '../css/placeOrder.css'
function PlaceOrderScreen({history}) {

    const dispatch = useDispatch()
    const [sdk, setSDK] = useState(false);
    const [details, setDetails] = useState();
    const [data, setData] = useState();

    const {user} = useSelector(state => state.auth)
    const cart = useSelector(state => state.cartDetails.cartItems)
    const shipping = useSelector(state => state.user.shipping)
    const payment = useSelector(state => state.user.payment)
    const {order, razorpay_id, razorpay_order_id} = useSelector(state => state.order)


    useEffect(() => {
        if(details)
        {
            dispatch(PayOrder(order?._id, {
            id:details?.razorpay_payment_id
        }))
        
        dispatch(clearCart())
        history.push(`/order/${order?._id}`)
        }

        if(order){
            dispatch(clearCart())
        history.push(`/order/${order?._id}`)
        }
    
    }, [order])

    useEffect(()=>{
        if(razorpay_order_id){
             
        var options = {
            "key": razorpay_id, // Enter the Key ID generated from the Dashboard
            "amount": orderSummary.totalPrice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "description": "Test Transaction",
            "order_id": razorpay_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                setDetails(response)
                dispatch(createOrder(orderSummary))
            },
            "prefill": {
                "name": user.name,
                "email": user.email
            },
            "theme": {
                "color": "#007bff"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
     }
    },[razorpay_order_id])

    const cartTotal = cart.reduce((acc, item) => acc + item.qty * parseInt(item.price), 0).toFixed(2)
    const tax = (cartTotal*0.28).toFixed(2)
    const shippingCharges = cartTotal>5000 ? 0 : (cartTotal*0.1).toFixed(2)

    const total = parseFloat(cartTotal) + parseFloat(tax)

    const [orderSummary, setSummary] = useState({orderItems:cart,shippingAddress:shipping ,paymentMethod:payment, taxPrice:parseFloat(tax), shippingPrice:parseFloat(shippingCharges), totalPrice:parseFloat(total)})

    const handlerSubmit = () => {

        if(payment === 'Razorpay'){
            dispatch(createRazorPayOrder(orderSummary))
        }
        else{        
        dispatch(createOrder(orderSummary))
    }
    }

    return (
        <div className="orderContainer">
            <div><div className="ordertableContainer">
							<h4 className='subheadings'>Shipping</h4>
								<div className='placeOrderEdit'><div>{shipping.address}</div> <a href='/shipping'><EditIcon style={{ color: "#007bff", cursor:'pointer' }}/> </a></div>
						</div>
                        <div className="ordertableContainer">
							<h4 className='subheadings'>Payment Method</h4>
								<div>{payment === "Razorpay" ? 'Razorpay' : payment}</div>
						</div>
						<div className="ordertableContainer">
							<h4 className='subheadings'>Order Items</h4>
							{
								cart.map((item, i) => <PlaceOrderCart item={item} key={i} />)
                            }
						</div></div>
                        
						<div className="orderSummary">
							<h3 className='subheadings'>
								Order Summary 
							</h3>
                            {/* <div>
                                {cart.reduce((acc, item) => acc + item.qty * 1, 0)} Items
                            </div> */}
							<div className="ordertableContainer">
							<div style={{fontWeight:400}}>Items</div>	<div>₹{cartTotal}</div>
							</div>
                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Tax</div>	<div>₹{tax}</div> 
							</div>
                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Shipping</div>	<div>₹{shippingCharges}</div> 
							</div>

                            <div className="ordertableContainer">
							<div style={{fontWeight:400}}>Total</div>	<div>₹{total}</div> 
							</div>
                            
				          <button className="checkout" onClick={handlerSubmit} >Place Order</button>
							 
						</div>
            
        </div>
    )
}

export default withRouter(PlaceOrderScreen)
