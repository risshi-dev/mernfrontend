import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cartDetails } from '../actions/cartAction';
import CartItem from '../components/CartItem';

function CartScreen({match,location, history}) {

    const productId = match.params.id
    const qty =location.search? location.search.split('=')[1]:1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cartDetails.cartItems)
	useEffect(() => {
        if(productId)
           {
			   dispatch(cartDetails(productId,qty))
			   history.push('/cart')
		}
}, [dispatch, productId, qty]);

const handleCheckout = () => {
	history.push('/login?redirect=shipping')
}
   
    return (
					<div className="cartContainer">
						<div className="tableContainer">
							<h1 style={{ color: "#007bff" }}>Shopping cart</h1>
							{cart.length !== 0 ? (
								cart.map((item, i) => <CartItem item={item} key={i} qty={qty} />)
							) : (
								<div className="cartItemContainer" style={{ color: "#d40000" }}>
									Your Cart is Empty!!
								</div>
							)}
						</div>
						<div className="cartTotal">
							<h3>
								Cart Subtotal {cart.reduce((acc, item) => acc + item.qty * 1, 0)} Items
							</h3>
							<h5 style={{ color: "#007bff" }}>
								₹{cart.reduce((acc, item) => acc + item.qty * parseInt(item.price), 0).toFixed(2)}
							</h5>
							<div>
								<button disabled={cart.length===0} className="checkout" onClick = {handleCheckout}>CheckOut</button>
							</div>
						</div>
					</div>
				);
}

export default withRouter(CartScreen)
