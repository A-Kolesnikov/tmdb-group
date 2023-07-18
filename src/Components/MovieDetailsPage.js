import React from "react";
import { downloadMovie } from "../Service/TMDBManager";

function MovieDetailsPage({movie}){
    
    const [movie, setMovie] = useState();
    downloadMovie(setMovie, 278)
        return (
            <div className="movie-details">
              <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.overview}</p>
              <p>Release Date: {movie.release_date}</p>
              <p>Vote Average: {movie.vote_average}</p>
              <p>Vote Count: {movie.vote_count}</p>
            </div>
          );
}

export default MovieDetailsPage