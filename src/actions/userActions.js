import axios from 'axios'
import {baseDomain} from './route'
export const userDetails = () => async (dispatch, getState) => {
               

    try {
                 const { auth : {user} } = getState()

                 dispatch({ type: "USER_DETAILS" });

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }
 
                 const { data } = await axios.get(
                     `${baseDomain}/users/profile`,
                     config
                 );
 

                 dispatch({
                     type: "USER_DETAILS_SUCCESS",
                     payload: data,
                 });
 
             }
     catch(error){
         dispatch({
                                     type: "USER_DETAILS_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }

 export const updateUser = (updatedInfo) => async (dispatch, getState) => {
               

    try {
                 const { auth : {user} } = getState()

                 dispatch({ type: "UPDATE_USER_REQUEST" });

                 const config = {
                     headers:{
                         'Content-Type':'application/json',
                         Authorization : `Bearer ${user.token}`
                     }
                 }

                 const {userName, userEmail, password} = updatedInfo
 
                 const { data } = await axios.post(
                     `${baseDomain}/users/update`,
                     {name:userName, email:userEmail, password},
                     config
                 );

                 dispatch({
                     type: "UPDATE_USER_SUCCESS",
                     payload: data,
                 });
 
             }
     catch(error){
         dispatch({
                                     type: "UPDATE_USER_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }


 export const updateAddress = (address) => async (dispatch, getState) => {
               

    try {
                 const { auth : {user} } = getState()

                 dispatch({ type: "UPDATE_USER_ADDRESS", payload:address });

                 localStorage.setItem('shippingAddress',JSON.stringify(address))
 
             }
     catch(error){
        //console.log(error)
     }
 
 }


 export const updatePayment = (payment) => async (dispatch) => {
               

    try {

                 dispatch({ type: "UPDATE_PAYMENT", payload:payment });

                 localStorage.setItem('payment', payment)
 
             }
     catch(error){
        //console.log(error)
     }
 
 }