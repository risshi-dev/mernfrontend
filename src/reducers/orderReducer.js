import { AccordionActions } from "@material-ui/core";

const orderReducer = (state = { 
	loading:false,
	 order:null,
	  error:null,
	   allOrders:null,
	    allOrdersError:null,
	     orderById:null,
	  	  orderByIdError:null,
		   orderPayError:null, 
		   order_PAY:null,
		   razorpay_id:null,
		   paypalError:null,
		   razorpay_order_id:null
		},
		    action) => {

	switch (action.type) {
		case "ORDER_REQUEST":
			return {
                ...state,
				...{loading: true},
				
			};
		case "ORDER_SUCCESS":
			return {
                ...state,
                ...{
                    loading: false,
				    order: action.payload,
                    error:null
                }
				
			};
		case "ORDER_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

			case "ALL_ORDERS_REQUEST":
			return {
                ...state,
				...{loading: true},
				
			};
		case "ALL_ORDERS_SUCCESS":
			return {
                ...state,
                ...{
                    loading: false,
				    allOrders: action.payload,
                    allOrdersError:null
                }
				
			};
		case "ALL_ORDERS_FAIL":
			return {
				loading: false,
				allOrdersError: action.payload,
			};

			case "ORDER_BY_ID_REQUEST":
				return {
					...state,
					...{loading: true},
					
				};
			case "ORDER_BY_ID_SUCCESS":
				return {
					...state,
					...{
						loading: false,
						orderById: action.payload,
						orderByIdError:null
					}
					
				};
			case "ORDER_BY_ID_FAIL":
				return {
					loading: false,
					orderByIdError: action.payload,
				};

				case "ORDER_PAY_REQUEST":
					return {
						...state,
						...{loading: true},
						
					};
				case "ORDER_PAY_SUCCESS":
					return {
						...state,
						...{
							loading: false,
							order_PAY: action.payload,
							orderPayError:null
						}
						
					};
				case "ORDER_PAY_FAIL":
					return {
						loading: false,
						orderPayError: action.payload,
					};
				
					case "RAZORPAY_ID_SUCCESS":
				return {
					...state,
					...{razorpay_id: action.payload},
					
				};

				case "RAZORPAY_ORDER_SUCCESS":
					return {
						...state,
						...{razorpay_order_id:action.payload}
					}

			case "RAZORPAY_ID_FAIL":
				return {
					...state,
					...{
						paypalError: action.payload,
						}
					
				};
		default:
			return state;
	}
};

export default orderReducer;
