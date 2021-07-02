import {baseDomain} from './route'
import axios from "axios";

export const createRazorPayOrder = (order) => async (dispatch, getState) => {
	
    try{dispatch({
        type: "RAZORPAY_ORDER_REQUEST"
    });

    const { auth : {user} } = getState()

             const config = {
                 headers:{
                     'Content-Type':'application/json',
                     Authorization : `Bearer ${user.token}`
                 }
             }

       console.log({...order, user: user._id})

    const { data } = await axios.post(`${baseDomain}/orders/create_order_razorpay`,{...order, user: user._id},config);
    
    dispatch({
        type:'RAZORPAY_ORDER_SUCCESS',
        payload:data
    })
}
catch(error){
    dispatch({
        type: "RAZORPAY_ORDER_FAIL",
        payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
    });
}

};

export const createOrder = (order) => async (dispatch, getState) => {
	
		try{dispatch({
			type: "ORDER_REQUEST"
		});

        const { auth : {user} } = getState()

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }

           console.log({...order, user: user._id})

        const { data } = await axios.post(`${baseDomain}/orders/create_order`,{...order, user: user._id},config);
        
        dispatch({
            type:'ORDER_SUCCESS',
            payload:data
        })
    }
    catch(error){
        dispatch({
            type: "ORDER_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.response,
        });
    }
    
};



export const fetchAllOrders =()=>async (dispatch, getState)=>{

    try {
                 dispatch({ type: "ALL_ORDERS_REQUEST" });

                 const { auth : {user} } = getState()

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }
 
                 const { data } = await axios.get(
                     `${baseDomain}/orders/get_orders`,config
                 );

                 dispatch({
                     type: "ALL_ORDERS_SUCCESS",
                     payload: data,
                 });
             }
     catch(error){
         dispatch({
                                     type: "ALL_ORDERS_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }


 export const fetchOrderById = (id) => async (dispatch, getState)=>{

    try {
        console.log('hit it')
                 dispatch({ type: "ORDER_BY_ID_REQUEST" });

                 const { auth : {user} } = getState()

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }
 
                 const { data } = await axios.get(
                     `${baseDomain}/orders/get_order/${id}`,config
                 );

                 dispatch({
                     type: "ORDER_BY_ID_SUCCESS",
                     payload: data,
                 });
             }
     catch(error){
         dispatch({
                                     type: "ORDER_BY_ID_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }

 export const PayOrder = (id, paymentDetails) => async (dispatch, getState) => {
	
    try{dispatch({
        type: "ORDER_PAY_REQUEST"
    });

    const { auth : {user} } = getState()

             const config = {
                 headers:{
                     'Content-Type':'application/json',
                     Authorization : `Bearer ${user.token}`
                 }
             }

       console.log(id)

    const { data } = await axios.post(`${baseDomain}/orders/orderPaid/${id}`,paymentDetails,config);
    
    dispatch({
        type:'ORDER_PAY_SUCCESS',
        payload:data
    })
}
catch(error){
    dispatch({
        type: "ORDER_PAY_FAIL",
        payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
    });
}

};

export const getPayPalId = () => async (dispatch) => {

try{
    const { data } = await axios.get(`${baseDomain}/payment_settings`);
    console.log(data)
    dispatch({
        type:'RAZORPAY_ID_SUCCESS',
        payload:data
    })
}
catch(error){
    dispatch({
        type: "RAZORPAY_ID_FAIL",
        payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
    });
}

};