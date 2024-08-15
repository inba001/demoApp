import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    </>
  );
}

export default App;
