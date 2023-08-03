import { all } from "redux-saga/effects";
import { countWatcher } from "src/saga/cashSaga";
import { customersWatcher } from "src/saga/customerSaga";

export function* rootWatcher() {
  yield all([countWatcher(), customersWatcher()])
}