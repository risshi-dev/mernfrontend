import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../actions/authActions';
import Alert from './Alert'

function SignUp({history, location}) {
                const initData = { name: "", email: "", password: "", confirmPassword:"" };
				const [user, setUser] = useState(initData);
				const [confirm, setConfirm] = useState(false)
                const dispatch = useDispatch()

				const {registerError, isLoggedIn} = useSelector(state => state.auth)
				
				const handleInputChange = (e) => {
					setUser({ ...user, [e.target.name]: e.target.value });
				};

				const redirect = location?.search ? location.search.split('=')[1] : '/'

				useEffect(()=>{

					//console.log(redirect)

					if(isLoggedIn){
					   history.push(redirect)
					}
				},[redirect,history, isLoggedIn])

				const handleSubmit = (e) => {
					e.preventDefault();
					if(user.confirmPassword!==user.password)
					       setConfirm(true)

					else{
					dispatch(userRegister(user))
					setUser(initData);
				}

				};
    return (         <>
	                {registerError && <Alert error={registerError} variant='danger' />}
					{confirm && <Alert error={'Password Do Not Match'} variant='danger' />}
					<form className="loginForm" onSubmit={handleSubmit}>
						<div>
							<label>Name*</label>
							<br />
							<input
								name="name"
								value={user.name}
								className="loginInput"
								type="text"
								placeholder="name"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Email*</label>
							<br />
							<input
								name="email"
								value={user.email}
								className="loginInput"
								type="email"
								placeholder="email"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Password*</label>
							<br />
							<input
								name="password"
								value={user.password}
								className="loginInput"
								type="text"
								placeholder="password"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Confirm Password*</label>
							<br />
							<input
								name="confirmPassword"
								value={user.confirmPassword}
								className="loginInput"
								type="password"
								placeholder="password"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>

						<div>
							<button className="loginSubmit" type="submit">
								Register
							</button>
						</div>
					</form>
					</>
				);
}

export default withRouter(SignUp)
