import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { downloadMovie } from "../Service/TMDBManager";

function MovieDetailsPage() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    downloadMovie(setMovie, id);
  }, [id]); // Re-run effect when id changes

  // Wait for movie data before rendering
  if (!movie) {
    return <div>Loading...</div>;
  }

  // Render movie details
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Vote Count: {movie.vote_count}</p>
    </div>
  );
}

export default MovieDetailsPage;
