import { ADD_CASH, ASYNC_ADD_CASH, ASYNC_GET_CASH, GET_CASH } from "src/redux/reducers/cashReducer";

export const addCashAction = (payload) => ({type: ADD_CASH, payload});
export const asyncAddCashAction = (payload) => ({type: ASYNC_ADD_CASH, payload});
export const getCashAction = (payload) => ({type: GET_CASH, payload});
export const asyncGetCashAction = (payload) => ({type: ASYNC_GET_CASH, payload});