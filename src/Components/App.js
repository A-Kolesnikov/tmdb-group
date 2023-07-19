import React from 'react';  //packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initStorage } from '../Service/LocalStorageManager'; //functions
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
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<loginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movie:id" element={<MovieDetailsPage />} />
          <Route path="/user:id" element={<UserPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;