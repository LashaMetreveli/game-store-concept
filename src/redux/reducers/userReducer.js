import * as type from "../types/user-types";

const initialState = {
  user: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    case type.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case type.DET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case type.LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
