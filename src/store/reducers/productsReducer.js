// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  categories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
