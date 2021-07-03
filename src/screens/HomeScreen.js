import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product'
import { productList, top_products } from '../actions/productActions';
import Loader from '../components/Loader';
import AlertMess from '../components/Alert';
import '../css/HomeScreen.css'

function HomeScreen() {
    

    const dispatch = useDispatch();
	const productlist = useSelector((state) => state.productList);
	const { loading, error, products } = productlist;
	useEffect(() => {
		dispatch(productList())
		dispatch(top_products())
	}, [dispatch]);


    return (
					<div>
						
						{loading && <Loader/>}
						{ error && <AlertMess error={error} variant='danger'/>} 
						{products &&
							<div className="product-container">
								<div className='homeHeading'>Deal of the Day</div>
								<div className='productsgrid'>
									{
									products?.map((product, index) => (
		                                                             <Col sm={10} md={8} lg={6} xl={4} key={index}>
			                                                                  <Product product={product} />
		                                                            </Col> ))}
	
								</div>
							</div>
						}
					</div>
				);
}

export default HomeScreen
