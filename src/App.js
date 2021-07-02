import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './components/Home';
import ProductPage from './components/ProductPage'
import store from './store'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderPage from './components/OrderPage';
import SearchScreen from './screens/SearchScreen';
import HeaderSearch from './components/HeaderSearch';
import HeaderRight from './components/HeaderRight';

function App() {
  return (
			<Router>
				<Provider store={store}>
					<div className="App">
						<Header
						color="transparent"
						brand="MernShop"
						leftLinks={<HeaderSearch />}
						rightLinks={<HeaderRight />}

						/>
						<Route path='/order/:orderId' component={OrderPage} />
						<Route path='/orders' component={OrderScreen} />
						<Route path='/place-order' component={PlaceOrderScreen} />
						<Route path='/payment' component={PaymentScreen} />
						<Route path='/shipping' component={ShippingScreen} />
						<Route path="/login" component={LoginScreen} />
						<Route path="/profile" component={ProfileScreen} />
						<Route path="/products/:id" component={ProductPage} />
						<Route path="/cart/:id?" component={ CartScreen } />
						<Route path="/search" component={SearchScreen} />
						<Route path="/" component={Home} exact />
					</div>
				</Provider>
			</Router>
		);
}

export default App;
