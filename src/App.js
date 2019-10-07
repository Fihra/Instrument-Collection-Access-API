import React from 'react';
import AllInstruments from './components/AllInstruments';
import Counter from './container/counterContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Instruments</h1>
        <Counter />
        <AllInstruments />
      </div>
    );
  }
  
}

export default App;