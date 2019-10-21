import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class AllInstruments extends React.Component {

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) => {
            return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
        })

    }

    render(){
        const { instruments} = this.props;
        return (
            <div>
                <Sidebar/>
                <div className="main-container">
                    <h2>Instruments List</h2>
                    <ul>
                    {this.showInstruments(instruments)}
                    </ul>
                </div>
                
            </div>
        );
    }
    
}

export default AllInstruments;
