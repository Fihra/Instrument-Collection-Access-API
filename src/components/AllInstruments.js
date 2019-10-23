import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class AllInstruments extends React.Component {
    constructor(){
        super();
        this.state = {
            searching: '',
            isAlphabetical: false,
            isClassification: false,
            isYear: false,
            filtered: []
        }
    }

    //TODO: Figure out ASynchronous api data 
    // to filtered data
    async componentDidMount(){
        console.log(this.props.instruments);
        this.setState({
            filtered: this.props.instruments
        })
    }

    showInstruments = (allInstruments) => {
        return allInstruments.map((instrument, i) => {
            return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
        })
    }

    handleToggle = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    render(){
        const { instruments} = this.props;
        console.log(instruments);
        return (
            <div>
                <Sidebar handleToggle={this.handleToggle}/>
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
