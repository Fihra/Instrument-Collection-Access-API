import React from 'react';
import StageContainer from './StageContainer';
import Venue from './Venue';
import Palette from './Palette';

class Staging extends React.Component {
    render(){
        return(
            <div className="main-container">
                <h3>Staging</h3>
                <StageContainer stage={this.props.stage} instruments={this.props.instruments}/>
                <Venue/>
            </div>
        )
    }
}

export default Staging;