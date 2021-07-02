import '../css/cartItem.css'
import { Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { cartDetails, cartRemove } from "../actions/cartAction";
import { Link } from 'react-router-dom';

    
function PlaceOrderCart({item}) {

const dispatch = useDispatch();


    return (
						<div className="cartItemContainer">
							<Link to={`/products/${item.product}`}><Image className="cartImage" style={{width:'80px'}} src={item.image} /></Link>
							<Link to={`/products/${item.product}`}><div style={{width:'200px'}}>{item.name}</div></Link>
							<div>{`₹${item.price}*${item.qty}`} = ₹{item.price * item.qty}</div>
							<div>
							</div>
						</div>

				);
}

export default PlaceOrderCart
