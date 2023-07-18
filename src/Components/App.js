import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import EditUserPage from './EditUserPage';
import SearchPage from './SearchPage'; // import SearchPage
import Navbar from './NavBar'; // import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* include Navbar */}
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/edituser" element={<EditUserPage />} />
        <Route path="/search" element={<SearchPage />} /> {/* include SearchPage */}
      </Routes>
    </Router>
  );
}

export default App;
