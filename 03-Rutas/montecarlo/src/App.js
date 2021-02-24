import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [dotCount, setDotCount] = useState(0)
  const [dotsInside, setDotsInside] = useState(0)
  const [pi, setPi] = useState(0)

  window.onload = () => {
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
      i++;
      console.log(i);
      setDotCount(i)
      let punto = document.createElement("div");
      punto.classList.add("punto");
      document.getElementById("circle").append(punto);

      let randomTop = ~~(Math.random() * 800);
      let randomLeft = ~~(Math.random() * 800);
      if (Math.pow(randomTop, 2) + Math.pow(randomLeft, 2) <= Math.pow(800, 2)) {
        j++;
        setDotsInside(j);
        setPi(((j * 4) / i).toString().substr(0, 5));
      }

      punto.style.top = `${randomTop}px`;
      punto.style.left = `${randomLeft}px`;
      if (i === 10000) clearInterval(interval);
    }, 0);
  }

  return (
    <div className="App">
      <h1>Puntos: {dotCount} | Puntos dentro: {dotsInside} | PI: {pi} </h1>
      <div>
        <div id="circle"></div>
      </div>
    </div>
  );
}

export default App;
