import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "src/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "src/saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootWatcher);