import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
