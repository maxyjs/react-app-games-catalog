import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./config";
import { rootReducer } from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const browserHistory = createBrowserHistory();

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory)))
);
