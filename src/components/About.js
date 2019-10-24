import React from 'react';

class About extends React.Component {
    render(){
        //console.log(this.props.routerProps);
        return(
            <div className="main-container">
                <h3>About</h3>
                <p>This is a list to keep track of the many kinds of instruments around the world. Trying to document them to preserve the history.</p>
                <p>If you find an instrument that you think is missing from this, please go to the <b>Suggest an Instrument</b> and fill out the form.</p>
            </div>
        )
    }
}

export default About;