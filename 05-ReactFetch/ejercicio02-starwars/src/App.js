import './App.css';
import { useState, useEffect } from 'react';
function App() {
  let [planets, setPlanets] = useState([]);
  let [residents, setResidents] = useState([]);
  let [selection, setSelection] = useState();
  useEffect(() => {
    fetch("http://swapi.dev/api/planets/")
      .then(res =>
        res.json()
      )
      .then(data => setPlanets(data.results));
  }, []);
  useEffect(() => {
    let selectedPlanet = planets.find(planet => planet.name === selection);
    if (selectedPlanet) {
      if (planets[planets.indexOf(selectedPlanet)].residents.length > 0) {
        let residentsArray = [];
        planets[planets.indexOf(selectedPlanet)].residents.forEach(resident => {
          fetch(resident)
            .then(res => res.json())
            .then(data => {
              residentsArray.push(data);
              if (residentsArray.length === planets[planets.indexOf(selectedPlanet)].residents.length) {
                setResidents(residentsArray);
              }
            });
        })
      } else {
        setResidents([{ name: "No hay residentes en este planeta" }]);
      }
    }
  }, [selection])
  return (
    <>
      <select name="planets" onChange={e => { setSelection(e.target.value); setResidents([]); }} value={selection}>
        <option default>Selecciona un planeta</option>
        {planets.map((planet, key) => {
          return <option key={key} value={planet.name}>{planet.name}</option>
        })}
      </select>
      <ul>
        {residents.map((resident, key) => {
          return <li key={key}>{resident.name}</li>
        })}
      </ul>
    </>
  );
}

export default App;