import * as actionTypes from "./actionTypes";

// this action sends product objects {quantity, name, image}
export const addCart = (productObj, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { product: productObj, quantity: quantity }
});

export const deleteCartItem = productID => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: productID
});

export const removeItemFromCart = productObj => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: productObj
});
