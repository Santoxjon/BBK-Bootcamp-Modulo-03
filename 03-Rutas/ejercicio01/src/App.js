import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  let [names, setNames] = useState(["Jon", "Aitor", "Iñigo", "Ionmi"]);

  let nameList = names.map((name) =>
    <li>{name}</li>
  );

  return (
    <BrowserRouter>
      <Route exact path="/">
        <h1>Rutas en React</h1>
      </Route>
      <Route path="/nombres">
        <ul>
          {nameList}
        </ul>
      </Route>
    </BrowserRouter>
  );
}

export default App;
