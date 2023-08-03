const initialState = {
  customers: [],
};

export const ADD_CUSTOMER = 'redux-ul/customerReducer/ADD_CUSTOMER';
export const ADD_MANY_CUSTOMERS = 'redux-ul/customerReducer/ADD_MANY_CUSTOMERS';
export const REMOVE_CUSTOMER = 'redux-ul/customerReducer/REMOVE_CUSTOMER';

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]};
    case ADD_MANY_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payload]};
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload)};
    default:
      return state;
  }
};