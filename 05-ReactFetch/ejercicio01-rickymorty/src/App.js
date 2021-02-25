import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const URL = "https://rickandmortyapi.com/api/character/";

function App() {

  let [results, setResults] = useState();

  useEffect(() => {

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setResults(data.results)

      })
  }, []);

  function Characters() {
    return (
      <>
        <p>{results}</p>
      </>);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/">
            <Characters />
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
