import React from 'react';
import RegisterPage from './RegisterPage';

import { initStorage } from '../Service/LocalStorageManager';

const App = () => {
  initStorage()
  
  return (
    <div>
      <h1>Registration Page</h1>
      <RegisterPage />
    </div>
  );
};

export default App;
