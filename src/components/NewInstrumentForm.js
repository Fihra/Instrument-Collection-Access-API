import React from 'react';

class NewInstrumentForm extends React.Component {
    render(){
        return(
            <div className="main-container">
                <h3>New Instrument Form</h3>
                <form className="instrument-form">
                    <label for="i-name">Instrument Name</label>
                    <input type="text" name="name" placeholder="name"></input>
                    <label for="i-origin">Origin</label>
                    <input type="text" name="origin" placeholder="origin"></input>
                    <label for="i-year">Year</label>
                    <input type="number" name="year" placeholder="year"></input>
                    <label for="i-class">Classification</label>
                    <input type="text" name="classification" placeholder="classification"></input>
                    <input type="submit" value="Submit"></input>
                    <input type="reset"></input>
                </form>
            </div>

        )
    }
}

export default NewInstrumentForm;