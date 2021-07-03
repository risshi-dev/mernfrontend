import { Image, Card, Button } from "react-bootstrap";
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { cartDetails } from "../actions/cartAction";
import { useParams } from "react-router-dom";

function ProductPageLeft({product, match, history}) {
    
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch()
     const {id} = useParams()
    const addtoCart = () =>{
            history.push(`/cart/${match}?qty=${quantity}`)
    }
	const buyNow = () =>{
		dispatch(cartDetails(id, quantity))
		history.push('/login?redirect=shipping')
}
    return (   
					<div>
						<div>
							<Image
								src={product.image}
								alt={product.name}
								className="product-page-image"
							/>
						</div>
						<div>
							<div className="details-container">
								<div variant="flush">
									<div>
										<div className="details-cont">
											<div style={{ padding: "8px" }}>Price :</div>
											<div className="text-btn">₹ {product.price}</div>
										</div>
									</div>
									<div>
										<div className="details-cont">
											<div style={{ padding: "8px" }}>Stock :</div>
											<div className="text-btn">
												{product.countInStock > 0 ? "In Stock" : "Out Of Stock "}
											</div>
										</div>
									</div>
									<div className="details-cont">
										<div style={{ padding: "8px" }}>Quantity :</div>
										<select
											onChange={(e) => setQuantity(e.target.value)}
											className="select-btn"
										>
											{[...Array(product.countInStock).keys()].map((i) => (
												<option value={i+1} key={i+1}>
													{i+1}
												</option>
											))}
										</select>
									</div>
									<div style={{ textAlign: "center" }}>
										<button
                                        onClick={addtoCart}
											className="button-cont details-btn"
											disabled={product.countInStock > 0 ? false : true}
										>
											Add to cart
										</button>
										</div>
									<div style={{ textAlign: "center" }}>
										<button
                                        onClick={buyNow}
											className="button-cont details-btn"
											disabled={product.countInStock > 0 ? false : true}
										>
											Buy Now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
}

export default ProductPageLeft
