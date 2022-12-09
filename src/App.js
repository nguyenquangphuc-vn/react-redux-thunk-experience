import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './redux/toolkit/counter';

function App() {
  const counter = useSelector(state => state.reducer.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <button onClick={() => dispatch(incremented())}>
          +
        </button>
        <button onClick={() => dispatch(decremented())}>
          -
        </button>
      </header>
    </div>
  );
}

export default App;
