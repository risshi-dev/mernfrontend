import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../actions/authActions';
import { getPayPalId } from '../actions/orderActions';
import { updateAddress, updatePayment, updateUser, userDetails } from '../actions/userActions'
import AlertMess from './Alert';
import Alert from './Alert'

function PaymmentForm({history}) {

				const [payment, setPayment] = useState("");
				
				
                const dispatch = useDispatch()

				const {isLoggedIn} = useSelector(state => state.auth)
                const {razorpay_id, paypalError} = useSelector(state => state.order)
                
              useEffect(()=>{
                       dispatch(getPayPalId())
              },[])


				const handleSubmit = (e) => {
					e.preventDefault()
                    dispatch(updatePayment(payment))
					history.push('/place-order')
					}
					

				
    return (  
        
        <div>
        <div className='headingContainer '>
        <h3 className={`heading`}>
           Payment Method
        </h3>
        </div>
		
    <div className='loginContainer' style={{margin:'1vh auto', height:'40vh'}}>
					<form className="loginForm" onSubmit={handleSubmit}>
						{paypalError && <AlertMess error={paypalError} variant='danger' />}
						{
						razorpay_id && <div className='paymentContainer'>
							<label>Razorpay</label>
							<br />
							<input
								value='Razorpay'
								type="radio"
                                checked={payment===""? false : payment==="Razorpay" ? true : false}
								placeholder="Razorpay"
								onChange={(e) => setPayment(e.target.value)}
							/>
						</div>
						}
						<div className='paymentContainer'>
							<label>COD</label>
							<br />
							<input
								value='COD'
								type="radio"
                                checked={payment===""? false : payment==="COD" ? true : false}
								onChange={(e) => setPayment(e.target.value)}
							/>
						</div>
						<div className='paymentContainer'>
							<label>Pay Later</label>
							<br />
							<input
								value='Pay Later'
								type="radio"
                                checked={payment===""? false : payment==="Pay Later" ? true : false}
								onChange={(e) => setPayment(e.target.value)}
							/>
						</div>
                        
						<div>
							<button className="loginSubmit" type="submit">
								Place Order
							</button>
						</div>
					</form>
					</div>
                    </div>
				);

    }
export default withRouter(PaymmentForm)
