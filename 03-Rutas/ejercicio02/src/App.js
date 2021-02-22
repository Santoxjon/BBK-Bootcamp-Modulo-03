import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Cats from './animals/Cats';
import Dogs from './animals/Dogs';

function App() {
  const [cats, setCats] = useState(["https://tinyurl.com/y8zoml4j", "https://tinyurl.com/ybsyzqu2", "https://tinyurl.com/y7bqbwgd"]);
  const [dogs, setDogs] = useState(["https://tinyurl.com/ybobvtse", "https://tinyurl.com/y6vtjprb", "https://tinyurl.com/yc5x7tbk"]);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Animalitos</h1>
        <ul>
          <li><Link to="/cats">Gatos</Link></li>
          <li><Link to="/dogs">Perros</Link></li>
        </ul>
        <Route path="/cats">
          <Cats catimages={cats} />
        </Route>
        <Route path="/dogs">
          <Dogs dogimages={dogs} />
        </Route>
      </div>
    </BrowserRouter >
  );
}

export default App;
