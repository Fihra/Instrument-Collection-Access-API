import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Navbar/>
        <h1>Instruments</h1>
        
        <InstrumentContainer/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;