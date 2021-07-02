import { Search } from '@material-ui/icons';
import React, {useState} from 'react'
import {FormControl, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productByKey } from '../actions/productDetailsAction';
import '../css/header.css'
function HeaderSearch({history}) {


    const dispatch = useDispatch()

	const [key, setKey] = useState('')


	const handleSearch = (e) => {
		e.preventDefault()
		dispatch(productByKey(key))
		history.push(`/search?key=${key}`)
	}


    return (
        <div><form
									className="form-container"
									inline
								>
									<input
										className="form-input"
										type="text"
										placeholder="Search Products Here..."
										value={key}
										onChange={(e)=> setKey(e.target.value)}

									/>
									<button id="form-button" className='button-cont' onClick={handleSearch}><Search /></button>
								</form></div>
        
    )
}

export default withRouter(HeaderSearch)
