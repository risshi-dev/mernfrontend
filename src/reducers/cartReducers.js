
export const cartReducer = (state = {cartItems:[]},action) => 
{

    switch (action.type) {
					case "ADD_TO_CART":
                        {
                           const item = action.payload

                           const ifExists = state.cartItems.find(i => i.product===item.product)

                           if(ifExists){
                               return{
                                   ...state,
                                   ...{cartItems:state.cartItems.map(i => i.product===ifExists.product? item : i)}
                               }

                           }
                           else{
                               return{
                                   ...state,
                                   ...{cartItems:[...state.cartItems,item]}
                               }
                           }


                        };

                    case "REMOVE_FROM_CART":
                        return{
                            ...state,
                            ...{cartItems:state.cartItems.filter(p => p.product !== action.payload)}
                        }
                        case "CLEAR_CART":
                            return{
                                ...state,
                                ...{cartItems:[]}
                            }
                    default :
                       return state;
                    }
}