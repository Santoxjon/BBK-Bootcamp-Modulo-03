import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [results, setResults] = useState();
  const [backDisabled, setBackDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [page, setPage] = useState(1);
  const [URL, setURL] = useState("https://rickandmortyapi.com/api/character?page=1&count=10");

  useEffect(() => {
    setURL(`https://rickandmortyapi.com/api/character?page=${page}`);
  }, [page])

  useEffect(() => {
    apiCall();
  }, [URL])

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setResults(data.results.map(result => {
          return (
            <>
              <div>
                {/* <img src={result.image} alt="No carga" /> */}
                <p>{result.name}</p>
              </div>
            </>);
        }));
      });
  }

  function nextPage() {
    setPage(2);
    setNextDisabled(true);
    setBackDisabled(false);
  }

  function backPage() {
    setPage(1);
    setBackDisabled(true);
    setNextDisabled(false);
  }

  function Characters() {
    return (
      <>
        <div>{results}</div>
        <button disabled={backDisabled} onClick={backPage}>Anterior</button>
        <button disabled={nextDisabled} onClick={nextPage}>Siguiente</button>
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
