import React from 'react';

import { initStorage } from '../Service/LocalStorageManager'; //functions
import { downloadMovieList } from '../Service/TMDBManager';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage'; //components
import MovieDetailsPage from './MovieDetailsPage';

import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import EditUserPage from './EditUserPage';
import SearchPage from './SearchPage'; // import SearchPage
import Navbar from './NavBar'; // import Navbar

function App() {
  initStorage()
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/movies/:id" Component={MovieDetailsPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
