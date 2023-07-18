import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import EditUserPage from './EditUserPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="edituser" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
