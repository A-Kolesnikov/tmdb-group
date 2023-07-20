import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../App.css"

import { allData, logOut } from '../Service/LocalStorageManager';

function Navbar({changeLoggedUser, loggedUserID}) {

  const navigate = useNavigate()
  
  const conditionalLink1 = loggedUserID ? <Link className="nav-link" to={`/user/${loggedUserID}`}>User details</Link> : <Link to="/login" className="nav-link">Login</Link>
  const conditionalLink2 = loggedUserID ? <Link onClick={()=>changeLoggedUser('')} to="/" className="nav-link">Logout</Link> : <Link to="/register" className="nav-link">Register</Link>
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid" style={{width:"50%"}}>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/search" className="nav-link">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        {conditionalLink1}
        {conditionalLink2}
      </div>
    </nav>
  );
}

export default Navbar;