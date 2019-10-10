import React from 'react';
import InstrumentCard from './InstrumentCard';

const API = 'http://localhost:52371/api/instruments/all';

class AllInstruments extends React.Component {

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) =>{
            return <InstrumentCard key={i} instrument={instrument}/>
        })
    }
    render(){
        const { instruments} = this.props;
        //console.log(instruments);
        return (
            <div>
                <h2>All of the Instruments</h2>
                {this.showInstruments(instruments)}
            </div>
        );
    }
    
}

export default AllInstruments;
