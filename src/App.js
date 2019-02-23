import React, {Component} from 'react';
import Header from './Header/Header';
import APICall from './APICall/APICall';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <div className="contentContainer">
      <APICall />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;