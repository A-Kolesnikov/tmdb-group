import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../App.css"

function Navbar() {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid" style={{width:"50%"}}>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/search" className="nav-link">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;