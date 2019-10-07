import React from 'react';
import InstrumentCard from './InstrumentCard';

const API = 'http://localhost:52371/api/instruments/all';

class AllInstruments extends React.Component {
    constructor(){
        super();
        this.state = {
            instruments: []
        }
    }

    componentDidMount() {
        fetch(API)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    instruments: json
                })
            })
    }

    showInstruments = () => {
        return this.state.instruments.map((instrument, i) =>{
            return <InstrumentCard key={i} instrument={instrument}/>
        })
    }

    render(){
        return (
            <div>
                <h2>All of the Instruments</h2>
                {this.showInstruments()}
            </div>
        );
    }
    
}

export default AllInstruments;
