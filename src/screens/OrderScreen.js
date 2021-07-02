import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product'
import Loader from '../components/Loader';
import AlertMess from '../components/Alert';
import '../css/HomeScreen.css'
import { fetchAllOrders } from '../actions/orderActions';
import { Link } from 'react-router-dom';
import OrderId from '../components/OrderId';

function OrderScreen() {
    

    const dispatch = useDispatch();

	const {allOrders, loading, allOrdersError} = useSelector((state) => state.order);


	useEffect(() => {
		dispatch(fetchAllOrders());
	}, []);


    return (
					<div className='padding'>
						<div>
							<h4 style={{ color: "#007bff" }}>All Orders</h4>
						</div>
						{/* <h5>Latest Products</h5> */}
						{loading ? (
							<Loader/>
						) : allOrdersError ? (
							<AlertMess error={allOrdersError} variant='danger'/>
						) : allOrders && <OrderId order={allOrders} />}
					</div>
				);
}

export default OrderScreen
