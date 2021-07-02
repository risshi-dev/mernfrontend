import {baseDomain} from './route'
import axios from 'axios'
export const productList =()=>async (dispatch)=>{

   try {
				dispatch({ type: "PRODUCTLIST_REQ" });

				const { data } = await axios.get(
					`${baseDomain}/products/`
				);
				dispatch({
					type: "PRODUCTLIST_SUCCESS",
					payload: data,
				});
			}
    catch(error){
        dispatch({
									type: "PRODUCTLIST_FAIL",
									payload:
										error.response && error.response.data.message
											? error.response.data.message
											: error.response,
								});
    }

}

export const top_products =()=>async (dispatch)=>{

    try {
                 dispatch({ type: "TOP_PRODUCTS_REQ" });
 
                 const { data } = await axios.get(
                     `${baseDomain}/products/top_products`
                 );
                 dispatch({
                     type: "TOP_PRODUCTS_SUCCESS",
                     payload: data,
                 });
             }
     catch(error){
         dispatch({
                                     type: "TOP_PRODUCTS_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }
 

export const addReview = (review) => async (dispatch, getState) => {
               

    try {
		          const {rating, comment, id} = review
                 const { auth : {user} } = getState()

                 dispatch({ type: "ADD_REVIEW" });

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }
 
                 const { data } = await axios.post(
                     `${baseDomain}/products/${id}/reviews`,
					 {rating, comment}
					 ,
                     config
                 );

                 dispatch({
                     type: "ADD_REVIEW_SUCCESS",
                     payload: data,
                 });
 
             }
     catch(error){
         dispatch({
                                     type: "ADD_REVIEW_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }