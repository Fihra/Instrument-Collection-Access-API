import React from 'react';
//import AllInstruments from './components/AllInstruments';
//import CounterContainer from './container/counterContainer';
import InstrumentContainer from './container/instrumentContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Instruments</h1>
        {/* <CounterContainer /> */}
        {/* <AllInstruments /> */}
        <InstrumentContainer />
      </div>
    );
  }
  
}

export default App;