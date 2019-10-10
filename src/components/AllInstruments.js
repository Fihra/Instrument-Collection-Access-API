import React from 'react';
import InstrumentCard from './InstrumentCard';

class AllInstruments extends React.Component {

    // showInstruments = (allInstruments) => {
    //     return allInstruments.map((instrument, i) =>{
    //         return <InstrumentCard key={i} instrument={instrument}/>
    //     })
    // }

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) => {
            return <li><a href="#">{instrument.Name}</a></li>
        })
        
    }

    render(){
        const { instruments} = this.props;
        return (
            <div className="main-container">
                <h2>Instruments List</h2>
                <ul>
                {this.showInstruments(instruments)}
                </ul>
            </div>
        );
    }
    
}

export default AllInstruments;
