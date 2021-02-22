import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Team from './dreamTeam/Team';

let dreamteam = {
  name: "BootCamp Coders",
  creationDate: "07/01/2021",
  team: [
    {
      name: "Iñigo",
      lastname: "Herrero",
      alias: "iHFon",
      age: "30",
      position: "Base",
      image: ""
    },
    {
      name: "Aitor",
      lastname: "Ochoa",
      alias: "Dr Coke",
      age: "31",
      position: "Escolta",
      image: ""
    },
    {
      name: "Aitziber",
      lastname: "Escudero",
      alias: "Golden Shot",
      age: "24",
      position: "Alero tirador",
      image: ""
    },
    {
      name: "Ibai",
      lastname: "Ruiz",
      alias: "Mongo Man",
      age: "37",
      position: "Pívot alto",
      image: ""
    },
    {
      name: "Lourdes",
      lastname: "Fernández",
      alias: "La noia màgica",
      age: "39",
      position: "Pívot bajo",
      image: ""
    }
  ]
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>🏀 BBK-Bootcamp DREAM TEAM 🏀</h1>
        <Route exact path="/">
          <Team team={dreamteam} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
