import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

import { voiceover, pauseVoice, stopVoice } from "../Service/VoiceAPIManager";
import { downloadMovie } from "../Service/TMDBManager";

function MovieDetailsPage({loggedUserID}) {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    downloadMovie(setMovie, id, loggedUserID);
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
      <div className='row d-flex justify-content-center mb-3'>
        <div className='col-1'>
          <div className="row">
            <div className="col-6 border" onClick={() => voiceover(movie.overview)} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faPlay} size="xl"  />
            </div>
            <div className='col-6 border' onClick={stopVoice} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faStop} size="xl" />
            </div>
          </div>
        </div>
      </div>
      <p>Release Date: {movie.release_date}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Vote Count: {movie.vote_count}</p>
    </div>
  );
}

export default MovieDetailsPage;