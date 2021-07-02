import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import productListReducer from './reducers/productReducers'
import productDetailsReducer from './reducers/productDetailsReducer'
import { cartReducer } from './reducers/cartReducers'
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducer'
import orderReducer from './reducers/orderReducer'

const middleware=[thunk]

const reducer = combineReducers({productList: productListReducer, productDetails: productDetailsReducer, cartDetails: cartReducer, auth: authReducer, user:userReducer, order: orderReducer})

const cartItems =  localStorage.getItem('CartItems') ? JSON.parse(localStorage.getItem('CartItems')) : []
const auth =  localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
const shipping =  localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : null
const payment =  localStorage.getItem('payment') ? (localStorage.getItem('payment')) : null
const intialState = {
    cartDetails : {cartItems: cartItems},
    auth: { user:(auth?.data), isLoggedIn:auth?.isLoggedIn },
    user : {shipping: shipping, payment:payment}
    }



const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store