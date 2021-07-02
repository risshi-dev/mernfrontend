import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter } from 'react-router-dom'
import { userLogin } from '../actions/authActions';
import Alert from './Alert'
import Loader from './Loader'
function  Login({history, location}) {

                const initData = {email: "", password: "" };
				const [userInfo, setUser] = useState(initData);
                const dispatch = useDispatch()

				const {loading, isLoggedIn, error} = useSelector(state => state.auth)

				const redirect = location?.search ? location.search.split('=')[1] : '/'

				useEffect(()=>{

					console.log(redirect)

					if(isLoggedIn){
					   history.push(redirect)
					}

				},[isLoggedIn, history, redirect])



				const handleInputChange = (e) => {
					setUser({ ...userInfo, [e.target.name]: e.target.value });
				};

				const handleSubmit = (e) => {
					e.preventDefault();
					console.log(userInfo);

					dispatch(userLogin(userInfo))
					setUser(initData);

					// history.push('/')
				};
    return (          <>
	                  {error && <Alert error={error} variant='danger' />}
					  {loading && <Loader />}
					<form className="loginForm" onSubmit={handleSubmit}>
						<div>
							<label>Email</label>
							<br />
							<input
								name="email"
								value={userInfo.email}
								className="loginInput"
								type="email"
								placeholder="email"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Password</label>
							<br />
							<input
								name="password"
								value={userInfo.password}
								className="loginInput"
								type="text"
								placeholder="password"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>

						<div>
							<button className="loginSubmit" type="submit">
								Login
							</button>
						</div>
					</form>
					</>
				);
}

export default withRouter(Login) 
