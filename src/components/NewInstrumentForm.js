import React from 'react';
import axios from 'axios';

class NewInstrumentForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "name",
            origin: "origin",
            year: 0,
            classification: "classification"
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
         e.preventDefault();

         const API = 'http://localhost:52371/api/instruments/new';

         axios.post(API, {
             Name: this.state.name,
             Origin: this.state.origin,
             Year: this.state.year,
             Classification: this.state.classification
         })
         .then(resp => {
             console.log(resp.data)
         })
    }

    //TODO: VALIDATIONS
    render(){
        return(
            <div className="main-container">
                <h3>New Instrument Form</h3>
                <form className="instrument-form" onSubmit={this.handleSubmit}>
                    <label for="i-name">Instrument Name</label>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
                    <label for="i-origin">Origin</label>
                    <input type="text" name="origin" placeholder="origin" onChange={this.handleChange}></input>
                    <label for="i-year">Year</label>
                    <input type="number" name="year" placeholder="year" onChange={this.handleChange}></input>
                    <label for="i-class">Classification</label>
                    <input type="text" name="classification" placeholder="classification" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"></input>
                    <input type="reset"></input>
                </form>
            </div>

        )
    }
}

export default NewInstrumentForm;