import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//packages

import { initStorage } from '../Service/LocalStorageManager'; //functions
import { downloadMovieList } from '../Service/TMDBManager';

import RegisterPage from './RegisterPage'; //components
import MovieDetailsPage from './MovieDetailsPage';


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
