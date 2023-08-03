import {
  ADD_CUSTOMER,
  ADD_MANY_CUSTOMERS,
  ASYNC_ADD_MANY_CUSTOMERS,
  REMOVE_CUSTOMER
} from "src/redux/reducers/customerReducer";

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
export const asyncAddManyCustomersAction = () => ({type: ASYNC_ADD_MANY_CUSTOMERS});
