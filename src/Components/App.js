import '../App.css';

import { initStorage } from '../Service/LocalStorageManager';

function App() {
  initStorage() //creating object with all project data in localStorage, if there is none
  return (
    <div>
        Hello!
    </div>
  );
}

export default App;