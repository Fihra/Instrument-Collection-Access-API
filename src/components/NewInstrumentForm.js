import React from 'react';

class NewInstrumentForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "name",
            origin: "origin",
            year: 0,
            classification: "chordophone",
            message: ''
        }
    }

    componentDidMount(){
        this.setState({
            message: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
         e.preventDefault();
        
         this.props.newInstrument(this.state.name, this.state.origin, this.state.year, this.state.classification);

         this.setState({
             message: 'Instrument Submitted'
         })
         setTimeout(() => this.setState({
            message: '',

            }), 2000);
        e.target.reset();
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
                    <label for="i-class">Classification
                        <select name="classification" value={this.state.classification} onChange={this.handleChange}>
                            <option value="chordophone">Chordophone</option>
                            <option value="aerophone">Aerophone</option>
                            <option value="idiophone">Idiophone</option>
                            <option value="membranophone">Membranophone</option>
                            <option value="electrophone">Electrophone</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"></input>
                    <input type="reset"></input>
                    {this.state.message === ''? <div></div> : <div>{this.state.message}</div>}
                </form>
            </div>
        )
    }
}

export default NewInstrumentForm;