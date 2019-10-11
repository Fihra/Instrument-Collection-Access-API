import React from 'react';
import InstrumentCard from './InstrumentCard';
import { Link } from 'react-router-dom';

class AllInstruments extends React.Component {

    // showInstruments = (allInstruments) => {
    //     return allInstruments.map((instrument, i) =>{
    //         return <InstrumentCard key={i} instrument={instrument}/>
    //     })
    // }

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) => {
            return <li><Link to={"/instruments/" + instrument.Id}>{instrument.Name}</Link></li>
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
