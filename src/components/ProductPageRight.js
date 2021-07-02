import React, { useState } from 'react'
import Star from "./Star";
import {withRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { ListGroup } from "react-bootstrap";
import {addReview} from '../actions/productActions'

function ProductPageRight({product, history}) {

	const {isLoggedIn} = useSelector(state => state.auth)

	const [review, setReview] = useState({
		rating:"",
		comment:""
	})
	
	const dispatch = useDispatch()

	const handleReview = (e) =>{
		dispatch(addReview({...review, id:product._id}))
		setReview({
			rating:"",
			comment:""
		})

	}

    return (
					<div>
						<div>
							<div className="product-page-desc">
								<div className="prdouct-page-desc-details">
									<div id="product-page-name">{product.name}</div>
								</div>
								<div className="prdouct-page-desc-details">
									<div id="product-page-brand">{product.brand}</div>
								</div>

								<div className="prdouct-page-desc-details" id="product-page-desc">
									<span className="product-page-span-desc">Description</span>
									<br />

									{product.description}
								</div>

								<div className="prdouct-page-desc-details" id="product-page-rating">
									<span className="product-page-span-desc">Rating</span>
									<div style={{ margin: "10px 0px" }}>
										<Star value={product.rating} />
									</div>
									<div style={{ margin: "10px 0px", fontWeight:'500' }}>{product.numReviews} Reviews</div>
									{
										product.reviews?.map( review => <div className='reviews' >
											{review.name}
											<Star value={review.rating} />
											<p>{review.comment}</p>
										</div>)
									}
									
								</div>

								{
										
						isLoggedIn ? 
					<div className="prdouct-page-desc-details">
			            <div>Write a review</div>
				        <form className="reviewForm" onSubmit={handleReview} >
						<div>
							<label>Rating</label>
							<br />
							<input
								name="rating"
								value={review.rating}
								className="reviewInput"
								type="text"
								placeholder="Rating"
								required
								onChange={(e) => setReview({...review, rating: e.target.value})}
							/>
						</div>
						<div>
							<label>Comment</label>
							<br />
							<input
								name="comment"
								value={review.comment}
								className="reviewInput"
								type="text"
								placeholder="Comment"
								required
								onChange={(e) => setReview({...review, comment: e.target.value})}
							/>
						</div>

						<div>
							<button className="loginSubmit" type="submit" >
								Add review
							</button>
						</div>
					</form>
				 </div>
                  
				  : 
				  
		      <div className="prdouct-page-desc-details">
				  <button className="loginSubmit" onClick={()=> history.push('/login')} >
					  Login To Review
				  </button>
			  </div>
									}
							</div>
						</div>
					</div>
				);
}

export default withRouter(ProductPageRight)
