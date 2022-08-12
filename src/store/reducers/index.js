import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { searchReducer } from "./searchReducer";
import { dataReducer } from "./dataReducer";
import { requestReducer } from "./requestReducer";

export const rootReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer,
  data: dataReducer,
  request: requestReducer,
});
