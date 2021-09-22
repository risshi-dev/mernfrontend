import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../actions/authActions';
import { updateUser, userDetails } from '../actions/userActions'
import Alert from './Alert'

function ProfileRight({history, location}) {

                const initData = { userName: "", userEmail: "", password: "", confirmPassword:"" };

				const [user, setUser] = useState(initData);
				const [pass, setPass] = useState(false)
                const dispatch = useDispatch()

				const {isLoggedIn} = useSelector(state => state.auth)
                const {userData, success, updateError} = useSelector(state => state.user)
                
              useEffect(()=>{

                    if(!isLoggedIn)
                         history.push('/login')      
                         
                    if(!userData)
                      dispatch(userDetails())
                    else
                           {
                            const {name, email} = userData
                              setUser({...user, userName:name, userEmail:email})
                            }
                    
           
              },[isLoggedIn,history, userData])

				const handleInputChange = (e) => {
					setUser({ ...user, [e.target.name]: e.target.value });
				};



				const handleSubmit = (e) => {
					e.preventDefault();
					if(user.confirmPassword!==user.password)
                             setPass(true)
					else {
						dispatch(updateUser(user))
					setUser(initData);
					setPass(false)
					}
					

				};
    return (        <div>
        <div className='headingContainer'>
        <h3 className={`heading`}>
           Profile
        </h3>
        </div>
		{success && <Alert variant='success' error={'Profile Updated Successfully!!'} />}
		{updateError && <Alert variant='danger' error={updateError} />}
		{pass && <Alert variant='danger' error={'Password Do Not Match'} />}
    <div className='loginContainer' style={{margin:'1vh auto'}}>
					<form className="loginForm" onSubmit={handleSubmit}>
						<div>
							<label>Name*</label>
							<br />
							<input
								name="userName"
								value={user.userName}
								className="loginInput"
								type="text"
								// placeholder="name"
								
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Email*</label>
							<br />
							<input
								name="userEmail"
								value={user.userEmail}
								className="loginInput"
								type="email"
								// placeholder="email"
								
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
								// placeholder="password"
								
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
								// placeholder="password"
								
								onChange={(e) => handleInputChange(e)}
							/>
						</div>

						<div>
							<button className="loginSubmit" type="submit">
								Update
							</button>
						</div>
					</form>
					</div>
                    </div>
				);
}

export default withRouter(ProfileRight)
