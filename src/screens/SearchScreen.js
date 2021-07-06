import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product'
import { productList } from '../actions/productActions';
import Loader from '../components/Loader';
import AlertMess from '../components/Alert';
import '../css/HomeScreen.css'
import { useLocation } from 'react-router-dom';
import { productByKey } from '../actions/productDetailsAction';

function SearchScreen() {
    
	const {search} = useLocation()
const dispatch = useDispatch()

	useEffect(() => {
		const query = search.split('=')[1]

		if(productById.length===0)
		      dispatch(productByKey(query))
	}, [search])

	const {productById, error ,loading} = useSelector((state) => state.productDetails);
	


    return (
					<div>
						{/* <h5>Latest Products</h5> */}
						{loading ? (
							<Loader/>
						) : error ? (
							<AlertMess error={error} variant='danger'/>
						) : (
							<div className="product-container">
								<div className='productsgrid'>{
									productById.length>0 ? productById.map((product, index) => (
		<Col sm={10} md={8} lg={6} xl={4} key={index}>
			<Product product={product} />
		</Col>
	))
			: <AlertMess error={'No Product Found'} variant='danger'/>						}</div>
							</div>
						)}
					</div>
				);
}

export default SearchScreen
