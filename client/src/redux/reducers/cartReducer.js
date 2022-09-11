import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {

    switch(action.type) {

        case actionTypes.ADD_TO_CART :
            const item = action.payload;
            const exist = state.cartItems.find(prod => prod.id === item.id);

            if(exist) {
                return {...state, cartItems: state.cartItems.map( data => data.product === item.product? item : data) };
            }
            else {
                return { ...state, cartItems: [ ...state.cartItems, item ] };
            }

        case actionTypes.ADD_TO_CART_ERROR :
            return { error: action.payload };

        case actionTypes.REMOVE_FROM_CART :
            return { ...state, cartItems: state.cartItems.filter( prod => prod.id !== action.payload ) };

        case actionTypes.CART_RESET :
            return { cartItems: [] };

        default:
            return state;
    };
};