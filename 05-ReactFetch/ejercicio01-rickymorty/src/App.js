import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const URL = "https://rickandmortyapi.com/api/character";

function App() {

  const [results, setResults] = useState();
  const [resultsLength, setResultsLength] = useState(0);
  const [backDisabled, setBackDisabled] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(0);
  const [page, setPage] = useState(0);
  let length = 0;
  let startIndex = 0;

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    apiCall();
    startIndex = page * 10;
    length = startIndex + 10;
    setNextDisabled(length === resultsLength ? 1 : 0);
    setBackDisabled(startIndex === 0 ? 1 : 0);
  }, [page])

  function apiCall() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setResultsLength(data.results.length);
        let parte1 = data.results.slice(startIndex, length);
        setResults(parte1.map((result) => {
          return (
            <div>
              <img src={result.image} alt="No carga" />
              < p > {result.name}</p >
            </div >);
        }));
      }
      );
  }

  function nextPage() {
    setPage(page + 1);
    setBackDisabled(0)
  }

  function backPage() {
    setPage(page - 1);
  }

  function Characters() {
    return (
      <>
        <h1>Rick y Morty: Characters</h1>
        <div>{results}</div>
        <div className="botonera">
          <button disabled={backDisabled} onClick={backPage}>Anterior</button>
          <button disabled={nextDisabled} onClick={nextPage}>Siguiente</button>
        </div>
      </>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/">
            <Characters key="yoquesetio" />
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
