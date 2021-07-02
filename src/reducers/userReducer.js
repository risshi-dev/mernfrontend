import { SignalCellularNullSharp } from "@material-ui/icons";

const userReducer = (state = {userData:null, loading:false, error:null, success:true, updateError:null, shipping:null, payment:null},action) => {

    switch (action.type) {
					case "USER_DETAILS":
						return {
                            ...state,
							...{loading: true},
                        
						};
					case "USER_DETAILS_SUCCESS":
						return {
							...state,
                            ...{
                                loading: false,
							    userData: action.payload,
                                error:null
                               }
						};
                        case "USER_DETAILS_FAIL":
                            return {
                                ...state,
                                ...{
                                    loading: false,
                                    error:action.payload
                                   }
                            };

                            case "UPDATE_USER":
                                return {
                                    ...state,
                                    ...{loading: true},
                                
                                };
                            case "UPDATE_USER_SUCCESS":
                                return {
                                    ...state,
                                    ...{
                                        loading: false,
                                        userData: action.payload,
                                        updateError:null,
                                        success:true
                                       }
                                       
                                };
                                case "UPDATE_USER_FAIL":
                                    return {
                                        ...state,
                                        ...{
                                            loading: false,
                                            success:false,
                                            updateError:action.payload
                                           }
                                    };
                                
                                    case "UPDATE_USER_ADDRESS":
                                        return {
                                            ...state,
                                            ...{
                                                shipping:action.payload
                                            }             
                                        }
                                    case "UPDATE_PAYMENT":
                                        return {
                                            ...state,
                                            ...{
                                                payment:action.payload
                                            }
                                        }

                    default:
                        return state
				}

}

export default userReducer