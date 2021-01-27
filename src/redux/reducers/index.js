import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import commonReducer from "./commonReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  appUser: userReducer,
  appCommon: commonReducer,
  appCart: cartReducer,
});

export default rootReducer;
