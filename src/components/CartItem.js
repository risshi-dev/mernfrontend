import '../css/cartItem.css'
import { Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { cartDetails, cartRemove } from "../actions/cartAction";
import { Link } from 'react-router-dom';

    
function CartItem({item}) {

const dispatch = useDispatch();
	
    const cartItemDelete = (id) => {
					dispatch(cartRemove(id));
				};


    return (
						<div className="cartItemContainer">
							<Link to={`/products/${item.product}`}><Image className="cartImage" src={item.image} /></Link>
							<Link to={`/products/${item.product}`}><div style={{width:'200px'}}>{item.name}</div></Link>
							<div>{`₹${item.price}`}</div>
							<div>
								<select
									value={item.qty}
									onChange={(e) => dispatch(cartDetails(item.product, e.target.value))}
									className="select-btn"
								>
									{[...Array(item.countInStock).keys()].map((i) => (
										<option value={i + 1} key={i + 1}>
											{i + 1}
										</option>
									))}
								</select>
							</div>
							<button style={{backgroundColor:'transparent',border:'none'}}  onClick={() => cartItemDelete(item.product)}>
								<DeleteIcon style={{ color: "#007bff" }} />
							</button >
						</div>

				);
}

export default CartItem
