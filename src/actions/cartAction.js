import {baseDomain} from './route'
import axios from "axios";
export const cartDetails = (id,qty) => async (dispatch, getState) => {
	

		const { data } = await axios.get(`${baseDomain}/products/${id}`);
		dispatch({
			type: "ADD_TO_CART",
			payload: {
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
            },
		});

        localStorage.setItem("CartItems", JSON.stringify(getState().cartDetails.cartItems)) 
    
};

export const cartRemove = (id) => (dispatch, getState) => {

dispatch({
    type:"REMOVE_FROM_CART",
    payload: id
})

localStorage.setItem('CartItems', JSON.stringify(getState().cartDetails.cartItems))

}

export const clearCart = () => (dispatch) => {

    dispatch({
        type:"CLEAR_CART"
    })
    
    localStorage.removeItem('CartItems')
    
    }