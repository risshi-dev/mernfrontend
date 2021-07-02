import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../actions/authActions';
import { userDetails } from '../actions/userActions'
import Alert from './Alert'

function ProfileLeft({history, location}) {

            
    return (        
    <div>
        <div className='headingContainer'>
        <h3 className={`heading`}>
           Orders
        </h3>
        </div>
    <div className='loginContainer' style={{margin:'1vh auto'}}>
					
					</div>
    </div>
				);
}

export default withRouter(ProfileLeft)
