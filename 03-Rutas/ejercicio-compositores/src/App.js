import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import DeleteComposer from './DeleteComposer';
import ShowComposers from './ShowComposers';

function App() {
  const [composers, setComposers] = useState(
    [
      {
        nombre: 'Wolfgang Amadeus Mozart',
        fecha: 1756,
        canciones: ['Symphonie Nr 40', 'Don Giovanni']
      },
      {
        nombre: 'Ludwig van Beethoven',
        fecha: 1770,
        canciones: ['Symphonie No.5', 'Piano SonataNo.32']
      }, {
        nombre: 'Johann Sebastian Bach',
        fecha: 1685,
        canciones: ['Vivace', 'Largo ma non tanto']
      }
    ]
  );


  const [listItems, setListItems] = useState(composers.map(composer => {
    return <li>{composer.nombre}</li>;
  }));
  const [addInputText, setAddInputText] = useState("");

  function addComposer() {
    if (addInputText !== "") {
      let updated_composers = composers;
      let obj = { nombre: addInputText }
      updated_composers.push(obj);

      setComposers(updated_composers);
      setListItems(updated_composers.map(composer => <li>{composer.nombre}</li>));

      setAddInputText("");
    }
  }

  function changeAddInput(event) {
    setAddInputText(event.target.value);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Compositores</h1>
        <Link to="/add">Añadir compositores</Link>
        <Link to="/delete">Eliminar compositores</Link>
        <div>
          <ShowComposers listItems={listItems} />
          <Route exact path="/add">
            <div className="group">
              <input type="text" id="text" value={addInputText} onInput={changeAddInput} />
              <button onClick={addComposer}>Añadir</button>
            </div>
          </Route>
          <Route exact path="/delete">
            <DeleteComposer composers={composers} setComposers={setComposers} setListItems={setListItems} />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
