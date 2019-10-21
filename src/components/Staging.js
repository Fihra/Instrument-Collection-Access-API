import React from 'react';
import StageContainer from '../containers/StageContainer';
import Venue from './Venue';

class Staging extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedStagingInstrument: ""
            
        }
    }

    instrumentChange = (instrumentName) => {
        this.setState({
            selectedStagingInstrument: instrumentName 
        })
    }

    render(){
        return(
            <div className="main-container">
                <h3>Staging</h3>
                <StageContainer stage={this.props.stage} instruments={this.props.instruments} instrumentChange={this.instrumentChange}/>
                <Venue selectedStageInstrument={this.state.selectedStagingInstrument}/>
            </div>
        )
    }
}

export default Staging;