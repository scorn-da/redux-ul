import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  };

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  };

  return (
    <div className='App'>
      <p style={{fontSize: 24}}>{cash}</p>
      <div style={{display: 'flex', width: 'fit-content', margin: '0 auto'}}>
        <button onClick={() => addCash(Number(prompt('Введите сумму')))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt('Введите сумму')))}>Снять</button>
      </div>
    </div>
  );
}

export default App;
