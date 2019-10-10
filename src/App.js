import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
        
        <InstrumentContainer/>
        {/* <Footer/> */}
      </div>
    );
  }
  
}

export default App;