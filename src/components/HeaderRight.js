import React, {useState} from 'react'
import {Nav,  NavDropdown } from 'react-bootstrap'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import '../css/header.css'
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../actions/authActions';

function HeaderRight({history}) {

    const dispatch = useDispatch()
	const {isLoggedIn, user} = useSelector(state => state.auth)


	const logOut = (e) => {
		console.log('logout')
		e.preventDefault()
		dispatch(userLogout())

	}

    return (
        <div className='headerRight'>
        <Nav to='/cart' className="cart-container">
									<Link to='/cart'>	
									<ShoppingCartIcon style={{ color: "#007bff" , marginRight: isLoggedIn ? '0px' : '15px'}} />
									</Link></Nav>	
									
									
									<Nav className="cart-container">
									{isLoggedIn ? <NavDropdown title={user.name} id="basic-nav-dropdown">
												  <NavDropdown.Item><Link to='/profile'>Profile</Link></NavDropdown.Item>
												  <NavDropdown.Item><Link to='/orders'>Orders</Link></NavDropdown.Item>
                                                  <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
                                                  </NavDropdown>
												:
										<Link to='/login'>
										<PersonIcon style={{ color: "#007bff" }} />
										</Link>}
										
									</Nav>
                </div>
    )
}

export default withRouter(HeaderRight)
