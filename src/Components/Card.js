import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { saveMovieToUser } from '../Service/LocalStorageManager'; // make sure the path is correct

const Card = ({ image, h5, txt, movie }) => {
  const navigate = useNavigate();

  const handleViewDetails = (movie) => {
    if (movie) {
      saveMovieToUser(movie);
      navigate(`/movie/${movie.id}`);
    } else {
      console.error('Movie is undefined');
    }
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="IMG NOT FOUND" />
      <div className="card-body">
        <h5 className="card-title text-white">{h5}</h5>
        <p className="card-text">{txt}</p>
        <button
          onClick={() => handleViewDetails(movie)}
          className="btn btn-primary"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
