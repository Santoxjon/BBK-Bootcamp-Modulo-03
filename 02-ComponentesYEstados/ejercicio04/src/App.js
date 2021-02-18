import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);

  function count() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <button
        onClick={count}
      >
        Púlsame!
      </button>
      <p>{counter}</p>
    </div>
  );
}

export default App;
