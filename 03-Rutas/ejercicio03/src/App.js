import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Movies from './Movies/Movies'
import Movie from './Movies/Movie'

let movies_array =
  [
    {
      id: "e89a9fdd97509d8e81cfd63d6e21f7ed",
      title: "Star Wars I: Phantom Menace",
      image: "https://images-na.ssl-images-amazon.com/images/I/51Jtw7qkufL._AC_.jpg",
      sinopsis: "Obi-Wan Kenobi es un joven aprendiz caballero Jedi bajo la tutela de Qui-Gon Jinn; Anakin Skywalker, quien después será padre de Luke Skywalker y se convertirá en Darth Vader, solamente es un niño de 9 años. Cuando la Federación de Comercio corta todas las rutas al planeta Naboo, Qui-Gon y Obi-Wan son asignados para solucionar el problema."
    },
    {
      id: "74690bceb6247998d35f1b174dd60a46",
      title: "Star Wars II: Attack of the Clones",
      image: "https://images-na.ssl-images-amazon.com/images/I/51nqmm2G6uL.jpg",
      sinopsis: "En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. La reina Amidala regresa al Senado para conseguir un ejército que ayude a los caballeros jedi."
    },
    {
      id: "04e837db05d7a1e990f4478ca9f3aa28",
      title: "Star Wars IV: A New Hope",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ww12gnYbL.jpg",
      sinopsis: "La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2, quien acompañado de su inseparable C-3PO logra escapar. Tras aterrizar en el planeta Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la princesa."
    }
  ];

function App() {
  const [movies, setMovies] = useState(movies_array);

  let moviesList = movies.map(movie =>
    <Route exact path={"/movies/" + movie.id}>
      <Movie movie={movie} />
    </Route>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Películas</h1>
        <Link to="/movies">Todas las películas</Link>
        <hr />
        <Route exact path="/movies">
          <Movies movies={movies} />
        </Route>
        {moviesList}
      </div>
    </BrowserRouter >
  );
}

export default App;
