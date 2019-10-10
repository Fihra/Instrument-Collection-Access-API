import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';
import NewInstrumentForm from './components/NewInstrumentForm';
import About from './components/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import { Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render(){

    return (  
      <div className="App">

        <BrowserRouter>
        <Navbar/>
        <Sidebar/>
          <Route exact path="/" component={InstrumentContainer}/>
          <Route path="/about" component={About}/>
          <Route path="/newinstrument" component={NewInstrumentForm}/>
          {/* <InstrumentContainer/> */}
        </BrowserRouter>
        
        {/* <Footer/> */}
      </div>
    );
  }
  
}

export default App;