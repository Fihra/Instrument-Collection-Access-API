import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';
import NewInstrumentForm from './components/NewInstrumentForm';
import About from './components/About';
import InstrumentCard from './components/InstrumentCard';

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
          <Route exact path="/" render={(routerProps) => <InstrumentContainer {...routerProps}/>}/>
          <Route path="/about" render={(routerProps) => <About {...routerProps}/>}/>
          <Route path="/newinstrument" render={(routerProps) => <NewInstrumentForm {...routerProps}/>}/>
          <Route path="/instruments/:id" render={(routerProps) => <InstrumentCard {...routerProps}/>}/>
          {/* <InstrumentContainer/> */}
        </BrowserRouter>
        
        {/* <Footer/> */}
      </div>
    );
  }
  
}

export default App;