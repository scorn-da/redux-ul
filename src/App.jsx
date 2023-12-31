import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction, asyncAddManyCustomersAction,
  removeCustomerAction
} from "src/redux/actionCreators/customerActionsCreators";
import { asyncAddCashAction, asyncGetCashAction} from "src/redux/actionCreators/cashActionsCreators";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch(asyncAddCashAction());
  };

  const getCash = () => {
    dispatch(asyncGetCashAction());
  };

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer));
  };

  return (
    <div className='App'>
      <p style={{fontSize: 24}}>{cash}</p>
      <div style={{display: 'flex', width: 'fit-content', margin: '0 auto'}}>
        <button onClick={() => addCash()}>Пополнить</button>
        <button onClick={() => getCash()}>Снять</button>
        <button onClick={() => addCustomer(prompt('Введите имя клиента'))}>Добавить клиента</button>
        <button onClick={() => dispatch(asyncAddManyCustomersAction())}>Получить клиентов из базы</button>
      </div>
      {
        customers.length > 0 ?
            <ul>
              {customers.map((customer) => {
                return (<li style={{width: 'fit-content', margin: '4px auto', padding: 8, fontSize: 18, border: '1px solid black', listStyle: 'none'}} key={customer.id} onClick={() => removeCustomer(customer.id)}>{customer.name}</li>
                )}
              )}
            </ul> :
            <p style={{fontSize: 18, marginTop: 12}}>Клиенты отсутствуют</p>

      }
    </div>
  );
}

export default App;
