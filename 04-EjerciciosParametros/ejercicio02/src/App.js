import './App.css';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function Result() {
    const params = useParams();
    return (
      <>
        <h1>Resultados</h1>
        <div className="results-div">
          <p>Suma: </p>
          <p>{params.number1} + {params.number2}</p>
          <p className="result">{+params.number1 + +params.number2}</p>
        </div>
        <hr />
        <div className="results-div">
          <p>Resta: </p>
          <p>{params.number1} - {params.number2}</p>
          <p className="result">{+params.number1 - +params.number2}</p>
        </div>
        <hr />
        <div className="results-div">
          <p>Multi: </p>
          <p>{params.number1} * {params.number2}</p>
          <p className="result">{+params.number1 * +params.number2}</p>
        </div>
        <hr />
        <div className="results-div">
          <p>Div: </p>
          <p>{params.number1} / {params.number2}</p>
          <p className="result">{+params.number1 / +params.number2}</p>
        </div>
        <hr />
        <div className="results-div">
          <p>Mod: </p>
          <p>{params.number1} % {params.number2}</p>
          <p className="result">{+params.number1 % +params.number2}</p>
        </div>
        <hr />
        <Link to={`/`}>Volver al inicio</Link>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <Route exact path="/">
              <h1>Números con los que operar</h1>
              <div>
                <button onClick={() => setNumber1(number1 + 1)} >+</button>
                <p>{number1}</p>
                <button onClick={() => setNumber1(number1 - 1)} >-</button>
              </div>
              <hr />
              <div>
                <button onClick={() => setNumber2(number2 + 1)} >+</button>
                <p>{number2}</p>
                <button onClick={() => setNumber2(number2 - 1)} >-</button>
              </div>
              <hr />
              <Link to={`/operations/${number1}/${number2}`}>Ver resultados</Link>
            </Route>
            <Route path="/operations/:number1/:number2">
              <Result />
            </Route>
          </div>
        </header>
      </div>
    </BrowserRouter >
  );
}

export default App;
