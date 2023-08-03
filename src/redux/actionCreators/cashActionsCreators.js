import { ADD_CASH, GET_CASH } from "src/redux/reducers/cashReducer";

export const addCashAction = (payload) => ({type: ADD_CASH, payload});
export const getCashAction = (payload) => ({type: GET_CASH, payload});