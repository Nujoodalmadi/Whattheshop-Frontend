import * as actionTypes from "../actions/actionTypes";

// this cart recieves product objects {quantity, name, image}
const initialState = {
  cart: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let item = action.payload;
      let addedItem = state.cart.find(
        addedProduct => addedProduct.product.name === item.product.name
      );
      if (addedItem) {
        addedItem.quantity++;
        return {
          ...state,
          cart: [...state.cart]
        };
      } else {
        return {
          ...state,
          cart: state.cart.concat(action.payload)
        };
      }
    case actionTypes.REMOVE_ITEM_FROM_CART:
      let removedItemID = action.payload;
      let itemInCart = state.cart.find(
        addedProduct => addedProduct.product.id === removedItemID
      );
      itemInCart.quantity--;
      return {
        ...state,
        cart: [...state.cart]
      };

    case actionTypes.REMOVE_FROM_CART:
      let cartItems = state.cart.filter(
        item => item.product.id !== action.payload
      );
      return {
        ...state,
        cart: cartItems
      };
    default:
      return state;
  }
};

export default cart;
