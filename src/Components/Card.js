import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const Card = ({ image, h5, txt, setSelectedMovie, movie }) => {

  const handlePlayClick = () => { //should pass movieID to useParam of MovieDetailsPage
    setSelectedMovie(movie);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="IMG NOT FOUND" />
      <div className="card-body">
        <h5 className="card-title text-white">{h5}</h5>
        <p className="card-text">{txt}</p>
        <Link
          to={{
            pathname: "/movie-details",
            state: { movie }
          }}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
};

export default Card;
