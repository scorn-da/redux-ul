import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  console.log(cash);

  return (
    <div className="App">
      cash
    </div>
  );
}

export default App;
