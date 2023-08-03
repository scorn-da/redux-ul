import { put, takeEvery } from 'redux-saga/effects';
import { addCashAction, getCashAction } from "src/redux/actionCreators/cashActionsCreators";
import { ASYNC_ADD_CASH, ASYNC_GET_CASH } from "src/redux/reducers/cashReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addWorker() {
  yield delay(1000)
  yield put(addCashAction(1000))
}
function* getWorker() {
  yield delay(1000)
  yield put(getCashAction(1000))
}

export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, addWorker)
  yield takeEvery(ASYNC_GET_CASH, getWorker)
}