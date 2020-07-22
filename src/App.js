import React from 'react';
import Header from './Components/Header';
import APICall from './api/APICall';
import Footer from './Components/Footer';

function App() {
    return (
      <div className="App">
        <Header />
        <APICall />
        <Footer />
      </div>
    );
  }

export default App;