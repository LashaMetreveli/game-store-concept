import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Router>
    </React.StrictMode>
    ,
  </Provider>,

  document.getElementById("root")
);
