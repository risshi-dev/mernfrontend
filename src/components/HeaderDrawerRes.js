import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../actions/authActions';
function HeaderDrawerRes() {

    const dispatch = useDispatch()
	const {isLoggedIn} = useSelector(state => state.auth)

	const logOut = (e) => {
		//console.log('logout')
		e.preventDefault()
		dispatch(userLogout())

	}

    return (
        <div style={{padding:'10px'}}>
             <Link to='/cart'><div className='headerRes'>
                 <ShoppingCartIcon style={{ color: "#007bff" , marginRight: '10px'}} />
                  Cart
                  
            </div>
            </Link>			
			
      { isLoggedIn ? <>
            <Link to='/profile'><div className='headerRes'><PersonIcon  style={{marginRight:'10px', color:'#0075f2'}}/> Profile</div></Link>
			 <Link to='/orders'><div className='headerRes'><LocalMallIcon style={{marginRight:'15px', color:'#0075f2'}}/>Orders</div></Link>
             <div className='headerRes' onClick={logOut}><ExitToAppIcon style={{marginRight:'10px', color:'#0075f2'}} /> Log Out</div>
             </>
        
        :
        <Link to='/login'>
            <div className='headerRes'>
			<PersonIcon style={{ marginRight:'10px',color: "#007bff" }} />
            Log In
            </div>
            </Link>
    }
    </div>
    )
}

export default HeaderDrawerRes
