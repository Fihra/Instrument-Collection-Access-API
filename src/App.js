import React from 'react';
import NewInstrumentForm from './components/NewInstrumentForm';
import About from './components/About';
import InstrumentCard from './components/InstrumentCard';
import AllInstruments from './components/AllInstruments';
import Staging from './components/Staging';

import Navbar from './components/Navbar';

import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showInstrument, stageInstrument, newInstrument, deleteInstrument } from './actions';

const mapStateToProps = (state) => {
  return {
    instruments: state.instruments,
    stage: state.stage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getInstrument: (id) => dispatch(showInstrument(id)),
      stageInstrument: (id) => dispatch(stageInstrument(id)),
      newInstrument: (name, origin, year, classification) => dispatch(newInstrument(name, origin, year, classification)),
      deleteInstrument: (id, history) => dispatch(deleteInstrument(id, history))
  }
}

class App extends React.Component {
  render(){
    return (  
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Route exact path="/" render={(routerProps) => <About {...routerProps}/>}/>
          <Route path="/instruments" render={(routerProps) => <AllInstruments {...routerProps} instruments={this.props.instruments}/>}/>
          <Route path="/newinstrument" render={(routerProps) => <NewInstrumentForm {...routerProps} newInstrument={this.props.newInstrument}/>}/>
          <Route path="/instruments/:name" render={(routerProps) => <InstrumentCard {...routerProps} instruments={this.props.instruments} stageInstrument={this.props.stageInstrument} deleteInstrument={this.props.deleteInstrument}/>}/>
          <Route path="/staging" render={(routerProps) => <Staging {...routerProps} stage={this.props.stage} instruments={this.props.instruments}/>}/>
        </BrowserRouter>
        
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);