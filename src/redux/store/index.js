import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "src/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "src/saga/cashSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(countWatcher);