import React from 'react';
import './App.css';
import LoginModal from './Login';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginModal/>
        <h1>Happy Birthday Emily!</h1>
      </header>
    </div>
  );
}

export default App;
