import React from 'react';
import './App.css';
import LoginPage from "./Components/LoginPage";

function App() {
  return (
      <div className="App">
          <LoginPage nome='Bruno'>

              <h2>está é uma children</h2>

          </LoginPage>
      </div>
  );
}

export default App;
