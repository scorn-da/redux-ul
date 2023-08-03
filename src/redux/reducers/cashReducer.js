const initialState = {
  cash: 0,
}

export const ADD_CASH = 'redux-ul/cashReducer/ADD_CASH';
export const GET_CASH = 'redux-ul/cashReducer/GET_CASH';

export const cashReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CASH:
      return {...state, cash: state.cash + action.payload};
    case GET_CASH:
      return {...state, cash: state.cash - action.payload};
    default:
      return state;
  }
}