import { createStore } from "redux";
import { rootReducer } from "src/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());