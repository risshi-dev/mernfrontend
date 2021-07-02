import Star from './Star'
import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/product.css'
function Product({product}) {
    return (
					<div>
						<Card className="product-card">
							<Link to={`products/${product._id}`}>
								<Card.Img
									className="card-image"
									variant="top"
									src={product.image}
									alt={product.name}
								/>
								<Card.Body className="card-body">
									<Card.Title className="productCard-text">{product.name}</Card.Title>

									<div>
										<Star value={product.rating} />
									</div>
									<Card.Text style={{fontWeight:'200', marginTop:'1rem'}}>
										{product.numReviews} Reviews
									</Card.Text>
									<div>
										<h5 style={{fontWeight:'200'}}>₹ {product.price}</h5>
									</div>
								</Card.Body>
							</Link>
						</Card>
					</div>
				);
}

export default Product
