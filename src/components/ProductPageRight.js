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

	const rating = [{R:'Worst', value: 1}, {R:'Average', value: 2}, {R:'Good', value: 3}, {R:'Best', value: 4}, {R:'Excellent', value: 5}]

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
									<span className="product-page-span-desc">Rating ({product.numReviews} Reviews)</span>
									<div style={{ margin: "10px 0px", display:'flex', alignItems:'center' }}>
										<Star value={product.rating} /> <div style={{ margin: "0px 5px", fontWeight:'100' }}>{product.rating}/5</div>
									</div>
									
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
						<div id='rating'> 
							<label>Rating</label>
							<br />
							<select
							    name="rating"
								value={review.rating}
								className="select-btn"
								style={{width:'110px'}}
								type="text"
								placeholder="Rating"
								required
								onChange={(e) => setReview({...review, rating: e.target.value})}
							>
											{rating.map(r => <option value={r.value}>{r.R}</option>)}
										</select>
							
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
				  
		      <div className="prdouct-page-desc-details" style={{textAlign:'center'}}>
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
