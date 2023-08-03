import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = () => {
    dispatch({type: 'ADD_CASH', payload: 5});
  };

  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 5});
  };

  return (
    <div className='App'>
      <p style={{fontSize: 24}}>{cash}</p>
      <div style={{display: 'flex', width: 'fit-content', margin: '0 auto'}}>
        <button onClick={() => addCash()}>Пополнить</button>
        <button onClick={() => getCash()}>Снять</button>
      </div>
    </div>
  );
}

export default App;
