import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';
import NewInstrumentForm from './components/NewInstrumentForm';
import About from './components/About';
import InstrumentCard from './components/InstrumentCard';
import AllInstruments from './components/AllInstruments';
import Staging from './components/Staging';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showInstrument, stageInstrument } from './actions';

const mapStateToProps = (state) => {
  return {
    instruments: state.instruments,
    stage: state.stage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getInstrument: (id) => dispatch(showInstrument(id)),
      stageInstrument: (id) => dispatch(stageInstrument(id))
  }
}

class App extends React.Component {

  render(){
    return (  
      <div className="App">
        
        <BrowserRouter>
        <Navbar/>
        <Sidebar/>
          <Route exact path="/" render={(routerProps) => <AllInstruments {...routerProps} instruments={this.props.instruments}/>}/>
          {/* <Route exact path="/" render={(routerProps) => <InstrumentContainer {...routerProps}/>}/> */}
          <Route path="/about" render={(routerProps) => <About {...routerProps}/>}/>
          <Route path="/newinstrument" render={(routerProps) => <NewInstrumentForm {...routerProps}/>}/>
          <Route path="/instruments/:name" render={(routerProps) => <InstrumentCard {...routerProps} instruments={this.props.instruments} stageInstrument={this.props.stageInstrument}/>}/>
          <Route path="/staging" render={(routerProps) => <Staging {...routerProps} stage={this.props.stage} instruments={this.props.instruments}/>}/>
        </BrowserRouter>
        
        {/* <Footer/> */}
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);