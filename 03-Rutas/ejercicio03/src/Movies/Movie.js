function Movie(params) {

    return (
        <div id="movie-details">
            <img src={params.movie.image} />
            <div>
                <p className="movie-title"><b>{params.movie.title}</b></p>
                <hr />
                <p className="sinopsis">{params.movie.sinopsis}</p>
            </div>
        </div>
    )
}

export default Movie;