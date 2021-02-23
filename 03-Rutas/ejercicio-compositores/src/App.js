import './App.css';
// PASO 1, PASO 2 import changeText from './script'
import React, { useState } from 'react';

function App() {
  const [composers, setComposers] = useState(['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach']);
  const [listItems, setListItems] = useState(composers.map(composer => {
    return <li>{composer}</li>;
  }));
  const [vacio, setVacio] = useState("");

  function addComposer() {
    let updated_composers = composers;
    updated_composers.push(document.getElementById("text").value);

    setComposers(updated_composers);
    setListItems(composers.map(composer => <li>{composer}</li>));

    document.getElementById("text").value = vacio;
  }

  function removeComposer() {
    let updated_composers = composers;
    let index = updated_composers.indexOf(document.getElementById("delete_input").value)
    
    if(index != -1) updated_composers.splice(index, 1);

    setComposers(updated_composers);
    setListItems(composers.map(composer => <li>{composer}</li>));

    document.getElementById("text").value = vacio;
  }

  return (
    <div className="App">
      <h1>Compositores</h1>
      <div>
        {/* PASO 1: <input type="text" id="text" onInput={ e => changeText(e) } /> */}
        <ul>
          {listItems}
        </ul>
        <div className="group">
          <input type="text" id="text" />
          <button onClick={addComposer}>Añadir</button>
        </div>
        <br />
        <div className="group">
          <input type="text" id="delete_input" />
          <button onClick={removeComposer}>Eliminar</button>
        </div>
        {/* PASO 1, PASO 2 <p id="p"></p> */}
      </div>
    </div>
  );
}

export default App;
