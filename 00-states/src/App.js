import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// let number = 1;


function App(props) {
  let [age, setNumber] = useState(+props.age);
  //let [year, setYear] = useState(new Date().getFullYear())

  function sumar() {
    setNumber(age + 1);
    //setYear(+year + 1);
    // number++;
    // console.log(number);
  }

  return (
    <>
      <h1>Hola soy {props.name}</h1>
      <p>El 17 de Junio del {age+1998} cumpliré {age} años</p>
      <button
        onClick={sumar}
      >
        Sumar!
      </button>
    </>
  )
}

export default App;
