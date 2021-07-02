import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../css/productPage.css'
import { useDispatch , useSelector} from 'react-redux';
import { productDetails } from '../actions/productDetailsAction';
import Loader from './Loader';
import AlertMess from './Alert'
import ProductPageLeft from './ProductPageLeft'
import ProductPageRight from './ProductPageRight';

function ProductPage({match,history}) {
    
    const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetail;
	
	useEffect(() => {

		dispatch(productDetails(match.params.id));

					}, [dispatch]);
    return (
					<div className='padding'>
						{loading ? (
							<Loader />
						) : error ? (
							<AlertMess />
						) : (
							<div className="product-page-container">
								<ProductPageLeft product={product} match={match.params.id} history={history}/>
								<ProductPageRight product={product} />
							</div>
						)}
					</div>
				);
}

export default ProductPage
