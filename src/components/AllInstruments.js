import React from 'react';
import InstrumentCard from './InstrumentCard';

class AllInstruments extends React.Component {

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) =>{
            return <InstrumentCard key={i} instrument={instrument}/>
        })
    }
    render(){
        const { instruments} = this.props;
        return (
            <div>
                <h2>All of the Instruments</h2>
                {this.showInstruments(instruments)}
            </div>
        );
    }
    
}

export default AllInstruments;
