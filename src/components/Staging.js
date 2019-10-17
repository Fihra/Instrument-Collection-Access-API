import React from 'react';
import StageContainer from './StageContainer';
import Venue from './Venue';

class Staging extends React.Component {
    render(){
        return(
            <div className="main-container">
                <h3>Staging</h3>
                <StageContainer/>
                <Venue/>
            </div>
        )
    }
}

export default Staging;