import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import EditUserPage from './EditUserPage';
import SearchPage from './SearchPage'; // import SearchPage
import Navbar from './NavBar'; // import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* include Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/edituser" element={<EditUserPage />} />
        <Route path="/search" element={<SearchPage />} /> {/* include SearchPage */}
      </Routes>
    </Router>
  );
}

export default App;
