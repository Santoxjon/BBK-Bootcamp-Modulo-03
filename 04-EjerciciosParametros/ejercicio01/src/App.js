import './App.css';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';

function Saludo() {
  let params = useParams();
  let nombre = params.nombre;
  return <p>{nombre}</p>
}
function App() {
  const [name, setName] = useState();

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <p>Rutas en React</p>
        <input type="text" placeholder="Tu nombre aquí" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <Link to={`/saludo/${name}`}>IR</Link>
      </Route>
      <Route path='/saludo/:nombre'>
        <Saludo />
      </Route>
    </BrowserRouter>
  );
}
export default App;