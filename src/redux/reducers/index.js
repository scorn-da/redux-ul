import { combineReducers } from "redux";
import { cashReducer } from "src/redux/reducers/cashReducer";
import { customerReducer } from "src/redux/reducers/customerReducer";

export const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});