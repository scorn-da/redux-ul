import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  };

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  };

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    };
    dispatch({type: 'ADD_CUSTOMER', payload: customer});
  };

  const removeCustomer = (customer) => {
    dispatch({type: 'REMOVE_CUSTOMER', payload: customer});
  };

  return (
    <div className='App'>
      <p style={{fontSize: 24}}>{cash}</p>
      <div style={{display: 'flex', width: 'fit-content', margin: '0 auto'}}>
        <button onClick={() => addCash(Number(prompt('Введите сумму')))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt('Введите сумму')))}>Снять</button>
        <button onClick={() => addCustomer(prompt('Введите имя клиента'))}>Добавить клиента</button>
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
