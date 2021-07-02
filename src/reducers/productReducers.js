const productListReducer = (state = {products:[], topProducts:null},action) => {

    switch (action.type) {
					case "PRODUCTLIST_REQ":
						return {
							loading: true,
							products: [],
						};
					case "PRODUCTLIST_SUCCESS":
						return {
							...state,
							loading: false,
							...{products: action.payload},
						};
					case "PRODUCTLIST_FAIL":
						return {
							loading: false,
							error: action.payload ,
						};

						case "TOP_PRODUCTS_REQ":
							return {
								loading: true,
							};

						case "TOP_PRODUCTS_SUCCESS":
							return {
								...state,
								loading: false,
								...{topProducts: action.payload},
							};

						case "TOP_PRODUCTS_FAIL":
							return {
								loading: false,
								error: action.payload ,
							};	

					case "ADD_REVIEW_SUCCESS":
						return {
							reviewAdded: action.payload ,
						};
					case "ADD_REVIEW_FAIL":
							return {
								reviewError: action.payload ,
							};

                    default:
                        return state
				}

}

export default productListReducer