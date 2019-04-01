import * as actionTypes from "../actions/actionTypes";

const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
