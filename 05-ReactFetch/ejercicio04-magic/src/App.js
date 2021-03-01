import './App.css';
import React, { useState, useEffect } from 'react';

const URL = "https://api.magicthegathering.io/v1/sets";
const URL_cards = "https://api.magicthegathering.io/v1/cards?set=";

function App() {

  const [selectedValue, setSelectedValue] = useState("");
  const [sets, setSets] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setSets(data.sets.map(set => {
          return <option value={set.code}>{set.name}</option>
        }))
      })
  }, [])

  function selectChanged(event) {
    setSelectedValue(event.target.value);

    fetch(URL_cards + event.target.value)
      .then(res => res.json())
      .then(data => {
        console.log(data.cards[0].i);
        setCards(data.cards.map(card => {
          return (
            <div className="card">
              <div>
                <img src={card.imageUrl} />
              </div>
              <div className="card-text">
                <p className="card-name">{card.name}</p>
                <p>{card.text}</p>
              </div>
            </div>)
        }))
      })
  }

  function Sets() {
    return (
      <select onChange={selectChanged} value={selectedValue}>
        <option hidden></option>
        {sets}
      </select>
    )
  }

  function Cards() {
    return (
      <>{cards}</>
    )
  }

  return (
    <div className="App">
      <h1>MAGIC - SETS</h1>
      <div><Sets /></div>
      <div id="cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
