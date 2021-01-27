import * as type from "../types/common-types";

const initialState = {
  loading: false,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case type.START_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case type.FINISH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
