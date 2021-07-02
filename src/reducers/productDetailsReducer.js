const productDetailsReducer = (state = { product: { reviews:[] }, productById: [] }, action) => {
	switch (action.type) {
		case "PRODUCTDETAILS_REQ":
			return {
				loading: true,
				...state
			};
		case "PRODUCTDETAILS_SUCCESS":
			return {
				loading: false,
				product: action.payload,
			};
		case "PRODUCTDETAILS_FAIL":
			return {
				loading: false,
				error: action.payload,
			};

			case "PRODUCT_BY_ID_REQ":
				return {
					loading: true,
					...state
				};
			case "PRODUCT_BY_ID_SUCCESS":
				return {
					...state,
					loading: false,
					...{productById: action.payload},
				};
			case "PRODUCT_BY_ID_FAIL":
				return {
					loading: false,
					error: action.payload,
				};

			
		default:
			return state;
	}
};

export default productDetailsReducer;
