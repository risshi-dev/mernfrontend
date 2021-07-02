import {baseDomain} from './route'
import axios from 'axios'
export const userLogin = (loginInfo) => async (dispatch) => {

   try {
				dispatch({ type: "LOGIN_REQUEST" });

                const config = {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }

				const { data } = await axios.post(
					`${baseDomain}/users/login`,
                    loginInfo,
                    config
				);


				dispatch({
					type: "LOGIN_SUCCESS",
					payload: data,
				});

                const auth = {data:data, isLoggedIn:true}

                localStorage.setItem('auth',JSON.stringify(auth))
			}
    catch(error){
        dispatch({
									type: "LOGIN_FAIL",
									payload:
										error.response && error.response.data.message
											? error.response.data.message
											: error.response,
								});
    }

}

export const userLogout = () => async (dispatch) => {

    localStorage.removeItem('auth')
    dispatch({type:"USER_LOGOUT"})

}


export const userRegister = (registerInfo) => async (dispatch) => {

    try {
                 dispatch({ type: "Register_REQUEST" });
 
                 const config = {
                     headers:{
                         'Content-Type':'application/json'
                     }
                 }
 
                 const { data } = await axios.post(
                     `${baseDomain}/users/register`,
                     registerInfo,
                     config
                 );
 
 
                 dispatch({
                     type: "Register_SUCCESS",
                     payload: data,
                 });
 
                 const auth = {data:data, isLoggedIn:true}
 
                 localStorage.setItem('auth',JSON.stringify(auth))
             }
     catch(error){
         dispatch({
                                     type: "Register_FAIL",
                                     payload:
                                         error.response && error.response.data.message
                                             ? error.response.data.message
                                             : error.response,
                                 });
     }
 
 }
