import * as type from "../types/cart-types";

const initialState = {
  cartItems: [],
  sum: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case type.CLEAR_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item[0] !== action.payload),
      };
    case type.CART_SUM:
      return {
        ...state,
        sum: state.sum + action.payload,
      };
    case type.CLEAR_ALL:
      return {
        ...state,
        sum: 0,
        cartItems: [],
      };
    default:
      return state;
  }
}
