import { BrowserRouter, Route, Link } from 'react-router-dom';

function Movies(params) {
    let moviesList = params.movies.map(movie =>
        <div>
            <img src={movie.image} />
            <p><Link to={"/movies/" + movie.id}>{movie.title}</Link></p>
        </div>
    );

    return (
        <div id="movies">
            { moviesList}
        </div>
    )
}

export default Movies;