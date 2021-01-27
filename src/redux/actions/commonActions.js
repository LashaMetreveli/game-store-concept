import * as type from "../types/common-types";

export const startLoading = () => ({ type: type.START_LOADING, payload: true });
export const finishLoading = () => ({
  type: type.FINISH_LOADING,
  payload: false,
});
