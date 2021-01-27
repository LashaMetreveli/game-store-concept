import * as type from "../types/cart-types";

export const addToCart = (data) => ({
  type: type.ADD_TO_CART,
  payload: data,
});

export const clearCart = (game) => ({
  type: type.CLEAR_CART,
  payload: game,
});

export const clearAllInCart = () => ({
  type: type.CLEAR_ALL,
});

export const cartSum = (game) => ({
  type: type.CART_SUM,
  payload: game,
});

export const addToCartAsync = (name, price, imageUrl) => {
  return (dispatch) => {
    const data = [name, price, imageUrl];
    dispatch(addToCart(data));
    dispatch(cartSum(price));
  };
};

export const clearCartAsync = (game, price) => {
  return (dispatch) => {
    dispatch(clearCart(game));
    dispatch(cartSum(price * -1));
  };
};

export const clearAllInCartAsync = () => {
  return (dispatch) => {
    dispatch(clearAllInCart());
  };
};
