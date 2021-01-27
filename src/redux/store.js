import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [reduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default rootStore;
