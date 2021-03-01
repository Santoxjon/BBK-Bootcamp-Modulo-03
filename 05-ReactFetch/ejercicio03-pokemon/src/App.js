import './App.css';
import React, { useState, useEffect } from 'react';

const URL_types = "https://pokeapi.co/api/v2/type/";

function App() {
  const [types, setTypes] = useState();
  const [pkm1, setPkm1] = useState();
  const [pkm2, setPkm2] = useState();
  const [pkm3, setPkm3] = useState();
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    fetch(URL_types)
      .then(res => res.json())
      .then(data => {
        setTypes(data.results.map(type => {
          return (
            <option value={type.url}>{type.name}</option>
          )
        }));
      });
  }, [])

  function typeSelected(event) {
    setSelectedOption(event.target.value);
    fetch(event.target.value)
      .then(res => res.json())
      .then(data => {
        let max = data.pokemon.length;

        let rand1 = ~~(Math.random() * max);
        let rand2 = ~~(Math.random() * max);
        let rand3 = ~~(Math.random() * max);

        setPkm1(data.pokemon[rand1].pokemon.name);
        setPkm2(data.pokemon[rand2].pokemon.name);
        setPkm3(data.pokemon[rand3].pokemon.name);

      })
  }

  function Pokemon(params) {
    return (<p> {params.pokemon} </p>)
  }

  function Tipos() {
    return (
      <select onChange={typeSelected} value={selectedOption}>
        <option hidden></option>
        {types}
      </select>
    )
  }

  return (
    <div className="App">
      <Tipos />
      <Pokemon pokemon={pkm1} />
      <Pokemon pokemon={pkm2} />
      <Pokemon pokemon={pkm3} />
    </div>
  );
}

export default App;
