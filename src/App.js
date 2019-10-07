import React from 'react';
import AllInstruments from './components/AllInstruments';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Instruments</h1>
        <AllInstruments />
      </div>
    );
  }
  
}

export default App;
