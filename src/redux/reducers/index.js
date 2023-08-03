import { combineReducers } from "redux";
import { cashReducer } from "src/redux/reducers/cashReducer";

export const rootReducer = combineReducers({
  cash: cashReducer,
});