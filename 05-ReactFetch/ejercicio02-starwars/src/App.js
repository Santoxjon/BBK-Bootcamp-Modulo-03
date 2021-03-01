import './App.css';
import React, { useState, useEffect } from 'react';

const URL = "https://swapi.dev/api/planets/";
function App() {

  const [planets, setPlanets] = useState();
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [planetURL, setPlanetURL] = useState("");
  const [residentsURL, setResidentsURL] = useState();
  const [resNames, setResNames] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setPlanets(data.results.map((planet) => {
          return (
            <option data-url={planet.url} value={planet.name}>{planet.name}</option>
          )
        }));
      }
      );
  }, [])

  useEffect(() => {
    if (planetURL !== "") {
      fetch(planetURL)
        .then(res => res.json())
        .then(data => {
          setResidentsURL(data.residents);
        });
    }
  }, [planetURL])

  useEffect(() => {
    if (planetURL !== "") {
      let array = [];
      residentsURL.forEach(resident_url => {
        fetch(resident_url)
          .then(res => res.json())
          .then(data => {
            array.push(data.name);
          });
      });
      console.log(array);
      setResNames(array);
    }
  }, [residentsURL])

  function planetChanged(e) {
    console.log("Hay cambio");
    setSelectedPlanet(e.target.value)
    setPlanetURL(e.target.options[e.target.selectedIndex].getAttribute('data-url'))
  }

  function Planetas() {
    return (
      <select onChange={planetChanged} value={selectedPlanet}>
        <option hidden></option>
        {planets}
      </select>
    );
  }

  function Residentes() {
    return (
      <p>{resNames.toString()}</p>
    )
  }

  return (
    <div className="App">
      <div>
        <h1>Planetas Star Wars</h1>
        <Planetas />
        <Residentes />
      </div>
    </div>
  );
}

export default App;
