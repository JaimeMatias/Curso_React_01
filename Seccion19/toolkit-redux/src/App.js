import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount ]= useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<p>

  <button type='button' onClick={()=>{setCount(count+1)}}>
    count is {count}
  </button>
</p>
      </header>
    </div>
  );
}

export default App;
