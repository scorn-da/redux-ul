const { ADD_CUSTOMER, REMOVE_CUSTOMER } = require("src/redux/reducers/customerReducer");

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
