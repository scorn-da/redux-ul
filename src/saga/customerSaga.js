import { put, takeEvery, call } from "redux-saga/effects";
import { ASYNC_ADD_MANY_CUSTOMERS } from "src/redux/reducers/customerReducer";
import { addManyCustomersAction} from "src/redux/actionCreators/customerActionsCreators";

const fetchCustomersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchCustomersWorker() {
  const data = yield call(fetchCustomersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addManyCustomersAction(json))
}

export function* customersWatcher() {
  yield takeEvery(ASYNC_ADD_MANY_CUSTOMERS, fetchCustomersWorker)
}