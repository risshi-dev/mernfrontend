const authReducer = (state = {user:null,isLoggedIn:false,loading:false, error:null, registerError:null},action) => {

    switch (action.type) {
					case "LOGIN_REQUEST":
						return {
                            ...state,
							...{loading: true},
                        
						};
					case "LOGIN_SUCCESS":
						return {
							...state,
                            ...{
                                loading: false,
							    user: action.payload,
                                isLoggedIn: true,
                                error:null
                               }
						};
					case "LOGIN_FAIL":
						return {
                            ...state,
							...{
                                loading: false,
                                isLoggedIn:false,
                                error: action.payload
                            },
						};
                    case "USER_LOGOUT":
                        return {
                            ...state,
                            ...{
                                user:null,
                                isLoggedIn:false,
                                error:null
                            }
                        }

                        case "Register_REQUEST":
                            return {
                                ...state,
                                ...{loading: true},
                            
                            };
                        case "Register_SUCCESS":
                            return {
                                ...state,
                                ...{
                                    loading: false,
                                    user: action.payload,
                                    isLoggedIn: true,
                                    registerError:null
                                   }
                            };
                        case "Register_FAIL":
                            return {
                                ...state,
                                ...{
                                    loading: false,
                                    isLoggedIn:false,
                                    registerError: action.payload
                                },
                            };

                    default:
                        return state
				}

}

export default authReducer