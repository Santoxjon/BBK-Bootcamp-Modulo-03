import './App.css';

import React, { useState } from 'react';
import calc from './calcPi';

function App() {
  const [limit, setLimit] = useState(2500)
  const [dotCount, setDotCount] = useState(0)
  const [dotCountRange, setDotCountRange] = useState(dotCount)
  const [dotsInside, setDotsInside] = useState(0)
  const [pi, setPi] = useState(0);
  const [disabledInput, setDisabledInput] = useState(false)
  const [rangeDisplay, setRangeDisplay] = useState("hidden");
  const [fastMode, setFastMode] = useState(false);

  function changeLimit(e) {
    let limit = e.target.value;
    setLimit(+limit);
  }

  function changeRange(e) {
    setDotCountRange(e.target.value);
    let dots = Array.from(document.getElementsByClassName("punto"));
    dots.forEach(dot => {
      dot.style.visibility = "hidden";
    })
    for (let i = 0; i < e.target.value; i++) {
      dots[i].style.visibility = "visible";
    }
  }

  function changeModeFast(e) {
    setFastMode(!fastMode);
    e.target.checked = !fastMode;
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={e => calc(e, setRangeDisplay, setDisabledInput, fastMode, setDotCount, setDotsInside, setPi, setDotCountRange, limit)} >
          <p><span>Puntos: </span><span>{dotCount}</span></p>
          <p><span>Dentro: </span><span>{dotsInside}</span></p>
          <p><span>π </span><span>{pi}</span></p>
          <hr />
          <label htmlFor="limit">Nº de puntos a dibujar</label><span></span>
          <input id="limit" type="number" min="2500" max="25000" placeholder="Número de puntos a dibujar" value={limit} onInput={changeLimit} required />
          <hr />
          <input type="submit" value="Calcular" id="btn" disabled={disabledInput} />
          <hr />
          <div>
            <label htmlFor="fast">Fast: </label>
            <input type="checkbox" name="mode" id="fast" onChange={changeModeFast} />
          </div>
          <input type="range" min="0" max={dotsInside} value={dotCountRange} onChange={changeRange} style={{ visibility: rangeDisplay }} />
        </form>
      </div>
      <div>
        {/* <h1>Puntos: {dotCount} | Dentro: {dotsInside} | π = {pi} </h1> */}
        <div id="square">
          <div id="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
