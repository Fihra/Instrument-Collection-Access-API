import React from 'react';
import InstrumentContainer from './containers/instrumentContainer';

class App extends React.Component {
  render(){

    return (
      <div className="App">
        <h1>Instruments</h1>
        {/* <CounterContainer /> */}
        {/* <AllInstruments /> */}
        <InstrumentContainer/>
      </div>
    );
  }
  
}

export default App;