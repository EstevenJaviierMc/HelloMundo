import React from 'react';
import './App.css';
import Nabvar from './components/Navbar/Navbar';

function App() {
  return (
      <div>
    <Nabvar/>
    <div className="container">
        <div className="row-justify-center">
            <p>
            Hello Mundo!
            </p>
        </div>
    </div>
    </div>
  );
}

export default App;
