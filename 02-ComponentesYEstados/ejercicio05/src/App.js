import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let names = ["Jon", "Ionmi", "Iñigo"]
  let [index, setIndex] = useState(0);
  let [visibleName, setVisibleName] = useState(names[index]);

  function changeName() {
    index++;
    if (index === 3) index = 0;
    setIndex(index)
    setVisibleName(names[index]);
  }

  return (
    <div className="App">
      <h1>{visibleName}</h1>
      <button
        onClick={changeName}
      >
        Cambiar nombre
      </button>
    </div>
  );
}

export default App;
