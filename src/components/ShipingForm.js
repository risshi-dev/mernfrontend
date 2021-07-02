import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../actions/authActions';
import { updateAddress, updateUser, userDetails } from '../actions/userActions'
import Alert from './Alert'

function ShipingForm({history, location}) {

                const initData = { address: "", state: "", pincode: "", city:"" };

				const [user, setUser] = useState(initData);
				
                const dispatch = useDispatch()

				const {isLoggedIn} = useSelector(state => state.auth)
                const {userData, success, updateError,shipping} = useSelector(state => state.user)
                
              useEffect(()=>{
                    
                if(shipping){
                    setUser({...user,
                    address:shipping.address,
                    city:shipping.city,
                    pincode:shipping.pincode,
                    state:shipping.state
                    })
                }
           
              },[shipping])

				const handleInputChange = (e) => {
					setUser({ ...user, [e.target.name]: e.target.value });
				};


				const handleSubmit = (e) => {
					e.preventDefault();
                    console.log(user)
					dispatch(updateAddress(user))
					history.push('/payment')
					}
					

				
    return (  
        
        <div>
        <div className='headingContainer '>
        <h3 className={`heading`}>
           Shipping Address
        </h3>
        </div>
		
    <div className='loginContainer shippingform' style={{margin:'1vh auto'}}>
					<form className="loginForm" onSubmit={handleSubmit}>
						<div>
							<label>Street Adress*</label>
							<br />
							<input
								name="address"
								value={user.address}
								className="loginInput"
								type="text"
								placeholder="Street"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>City*</label>
							<br />
							<input
								name="city"
								value={user.city}
								className="loginInput"
								type="text"
								placeholder="City"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
                        <div>
							<label>State*</label>
							<br />
							<input
								name="state"
								value={user.state}
								className="loginInput"
								type="text"
								placeholder="State"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
						<div>
							<label>Pincode*</label>
							<br />
							<input
								name="pincode"
								value={user.pincode}
								className="loginInput"
								type="number"
                                min='0'
								placeholder="Pincode"
								required
								onChange={(e) => handleInputChange(e)}
							/>
						</div>
                        
						<div>
							<button className="loginSubmit" type="submit">
								Proceed to Payment
							</button>
						</div>
					</form>
					</div>
                    </div>
				);

    }
export default withRouter(ShipingForm)
