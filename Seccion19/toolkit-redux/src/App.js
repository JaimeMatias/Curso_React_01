import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/Slices/Counter/counterSlice';
import { useState } from 'react';

function App() {
  const { value } = useSelector((state) => state.counter)// Me devuelve el valor del estado del redux Counter
  const dispatch = useDispatch() // Para dispara una accion
  const [factor,setFactor]=useState(3)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>
            count is {value}

          </h1>
          <button type='button' onClick={() => { dispatch(increment()) }}>
            Increment
          </button>
          <button type='button' onClick={() => { dispatch(decrement()) }}>
            Decrement
          </button>

          <button type='button' onClick={() =>   dispatch(incrementByAmount(factor))}>
            Increment by {factor}
          </button>


        </p>
      </header>
    </div>
  );
}

export default App;
