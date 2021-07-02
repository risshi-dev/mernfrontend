import React, { useEffect } from 'react'
import {Link, useParams, withRouter} from 'react-router-dom'
import '../css/productPage.css'
import { useDispatch , useSelector} from 'react-redux';
import Loader from './Loader';
import AlertMess from './Alert'
import {  fetchAllOrders, fetchOrderById } from '../actions/orderActions';
import OrderPageDetails from './OrderPageDetails';



function OrderPage({match,history}) {

	const dispatch = useDispatch()

    const {orderId} = useParams()

	const {orderById} = useSelector(state => state.order)

	useEffect(() => {
        dispatch(fetchOrderById(orderId))
					}, 
                    []);

	
    return (
		orderById && <div className='padding'>
						
                        <OrderPageDetails order={orderById} />
					</div>
				);
}

export default withRouter(OrderPage)
