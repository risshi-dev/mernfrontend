import {baseDomain} from './route'
import axios from "axios";
export const productDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: "PRODUCTDETAILS_REQ" });

		const { data } = await axios.get(`${baseDomain}/products/${id}`);
		dispatch({
			type: "PRODUCTDETAILS_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "PRODUCTDETAILS_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.response,
		});
	}
};


export const productByKey = (key) => async (dispatch) => {
	try {
		dispatch({ type: "PRODUCT_BY_ID_REQ" });

		const { data } = await axios.get(`${baseDomain}/products/search?key=${key}`);

		console.log(data)

		dispatch({
			type: "PRODUCT_BY_ID_SUCCESS",
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: "PRODUCT_BY_ID_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.response,
		});
	}
};