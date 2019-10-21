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
                <p>Instructions: Click on the Object to create a new one.</p>
                <p> Select from your list of instruments to change the text of the current text object to assign it.</p>
                <StageContainer stage={this.props.stage} instruments={this.props.instruments} instrumentChange={this.instrumentChange}/>
                <Venue selectedStageInstrument={this.state.selectedStagingInstrument}/>
            </div>
        )
    }
}

export default Staging;