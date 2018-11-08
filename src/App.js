import React, {Component} from 'react';
import Header from './Header';
import APICall from './APICall';
import Footer from './Footer';

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