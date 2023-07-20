import React, {useState} from 'react';  //packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initStorage, allData, dbLoggedUser } from '../Service/LocalStorageManager'; //functions
import { downloadMovieList } from '../Service/TMDBManager';

import RegisterPage from './RegisterPage'; //components
import MovieDetailsPage from './MovieDetailsPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import EditUserPage from './EditUserPage';
import SearchPage from './SearchPage';
import Navbar from './NavBar'; 

function App() {
  initStorage()
  const [loggedUserID, setLoggedUserID] = useState(allData().loggedUser)
  
  const changeLoggedUser = (id) =>{
    setLoggedUserID(id);
    dbLoggedUser(id);
  }
  
  return (
    <div className="App">
      <Router>
      <Navbar changeLoggedUser={changeLoggedUser} loggedUserID={loggedUserID} />
        <Routes>
          <Route path="/" element={<HomePage loggedUserID={loggedUserID}/>} />
          <Route path="/login" element={<LoginPage changeLoggedUser={changeLoggedUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/edituser" element={<EditUserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;