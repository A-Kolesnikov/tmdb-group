import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//packages

import { initStorage } from '../Service/LocalStorageManager'; //functions
import { downloadMovieList } from '../Service/TMDBManager';

import RegisterPage from './RegisterPage'; //components


function App() {
  initStorage()
  downloadMovieList(x=>console.log(x), 1)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
