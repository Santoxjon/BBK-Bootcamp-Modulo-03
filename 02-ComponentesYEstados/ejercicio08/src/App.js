import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

let matrix = [
  [],
  [],
  []
];

function App() {

  let [turn, setTurn] = useState(0);
  let [winner, setWinner] = useState("");

  let [btn00, setBtn00] = useState("");
  let [btn01, setBtn01] = useState("");
  let [btn02, setBtn02] = useState("");
  let [btn10, setBtn10] = useState("");
  let [btn11, setBtn11] = useState("");
  let [btn12, setBtn12] = useState("");
  let [btn20, setBtn20] = useState("");
  let [btn21, setBtn21] = useState("");
  let [btn22, setBtn22] = useState("");

  function checkWin() {
    let c = turn % 2 === 0 ? "x" : "o";
    if (
      (matrix[0][0] === c && matrix[0][1] === c && matrix[0][2] === c) ||
      (matrix[1][0] === c && matrix[1][1] === c && matrix[1][2] === c) ||
      (matrix[2][0] === c && matrix[2][1] === c && matrix[2][2] === c) ||
      (matrix[0][0] === c && matrix[1][0] === c && matrix[2][0] === c) ||
      (matrix[0][1] === c && matrix[1][1] === c && matrix[2][1] === c) ||
      (matrix[0][2] === c && matrix[1][2] === c && matrix[2][2] === c) ||
      (matrix[0][0] === c && matrix[1][1] === c && matrix[2][2] === c) ||
      (matrix[2][0] === c && matrix[1][1] === c && matrix[0][2] === c)
    ) {
      return true;
    }
    return false;
  }

  function draw(e) {
    e.target.disabled = "true";
    let str = turn % 2 === 0 ? "x" : "o";
    e.target.classList.add(turn % 2 === 0 ? "j1" : "j2");
    switch (e.target.id.substr(3)) {
      case "00":
        setBtn00(str);
        matrix[0][0] = str;
        break;
      case "01":
        setBtn01(str);
        matrix[0][1] = str;
        break;
      case "02":
        setBtn02(str);
        matrix[0][2] = str;
        break;
      case "10":
        setBtn10(str);
        matrix[1][0] = str;
        break;
      case "11":
        setBtn11(str);
        matrix[1][1] = str;
        break;
      case "12":
        setBtn12(str);
        matrix[1][2] = str;
        break;
      case "20":
        setBtn20(str);
        matrix[2][0] = str;
        break;
      case "21":
        setBtn21(str);
        matrix[2][1] = str;
        break;
      case "22":
        setBtn22(str);
        matrix[2][2] = str;
        break;
    }
    setTurn(turn + 1);

    setTimeout(function () {
      if (checkWin()) {
        Array.from(document.getElementsByTagName('button')).map(button => button.disabled = true);
        setWinner("Jugador\n" + ((turn % 2) + 1))
        document.getElementById("winner").style.visibility = "visible";
      }
    }, 0);
  }

  return (
    <div className="App">
      <div>
        <p><b>{turn % 2 === 0 ? "Jugador 1" : "Jugador 2"}</b></p>
        <div>
          <div className="row">
            <div className="column0">
              <button id="btn00" onClick={e => draw(e)}>{btn00}</button>
            </div>
            <div className="column1">
              <button id="btn01" onClick={e => draw(e)}>{btn01}</button>
            </div>
            <div className="column2">
              <button id="btn02" onClick={e => draw(e)}>{btn02}</button>
            </div>
          </div>
          <div className="row">
            <div className="column0">
              <button id="btn10" onClick={e => draw(e)}>{btn10}</button>
            </div>
            <div className="column1">
              <button id="btn11" onClick={e => draw(e)}>{btn11}</button>
            </div>
            <div className="column2">
              <button id="btn12" onClick={e => draw(e)}>{btn12}</button>
            </div>
          </div>
          <div className="row">
            <div className="column0">
              <button id="btn20" onClick={e => draw(e)}>{btn20}</button>
            </div>
            <div className="column1">
              <button id="btn21" onClick={e => draw(e)}>{btn21}</button>
            </div>
            <div className="column2">
              <button id="btn22" onClick={e => draw(e)}>{btn22}</button>
            </div>
          </div>
        </div>
        <p id="winner">Ganador: {winner}</p>
      </div>
    </div>
  );
}

export default App;
