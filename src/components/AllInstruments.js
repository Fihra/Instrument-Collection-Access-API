import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class AllInstruments extends React.Component {
    constructor(){
        super();
        this.state = {
            searching: '',
            filterChoice: '',
            filtered: []
        }
    }

    //TODO: Figure out ASynchronous api data 
    // to filtered data
    componentDidMount(){
        this.setState({
            filtered: this.props.instruments
        })
    }
    componentWillUnmount(){
        this.setState({
            filtered: this.props.instruments
        })
    }

    // componentDidUpdate(prevProps, prevState){
    //     //Using prevState to validate checkboxes
    //     // console.log(prevProps);
    //     // console.log(prevProps.instruments);
    //     // console.log(prevState);
    //     if(!prevProps.instruments){
    //         this.setState({
    //         isAlphabetical: false,
    //         isClassification: false,
    //         isYear: false,
    //         filtered: this.props.instruments
    //         })
    //     }
        
    //     else if(!prevState.isAlphabetical){
    //         this.handleAlphabetical();        
    //     }
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevProps)
    //     if(this.state.filtered !== prevProps.AllInstruments){
    //         return 0;
    //     }
    // }

    handleAlphabetical = () => {
        // let obj = [...this.state.filtered]
        // obj.sort((a, b) => {
        //     if(a.Name < b.Name) return -1;
        //     else if(a.Name > b.Name) return 1;
        //     return 0;
        // })
        // this.setState({
        //     filtered: obj
        // })
    }

    handleClassification = () => {

    }

    handleYear = () => {
        
    }

    showInstruments = (instruments) => {

        return instruments.map((instrument, i) => {
            return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
        })


        // console.log(allInstruments);
        // const allInstruments = this.state.filtered;
        // //Check Filters here

        // if(this.state.filterChoice === 'isAlphabetical'){ 
        //      this.handleAlphabetical();        
        // } else{
        //     return this.outputInstruments();
        // }

        // if(this.state.isAlphabetical || this.state.isClassification || this.state.isYear){

        //     if(this.state.isAlphabetical){
                
        //     }
        //     else if(!this.state.isAlphabetical){
        //         return this.outputInstruments(allInstruments);
        //     }
        //     return this.outputInstruments(filtered);
        // }else{
        //     // return allInstruments.map((instrument, i) => {
        //     //     return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
        //     // })
        //     return this.outputInstruments(allInstruments);
        // }
  
    }

    // outputInstruments = () => {
    //     // const array = theOutput;
    //     return this.state.filtered.map((instrument, i) => {
    //         return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
    //     })
    // }

    handleToggle = (event) => {
        // console.log(event.target);
        this.setState({
            filterChoice: event.target.value
        })

    }

    render(){
        const { instruments} = this.props;
        const { filtered } = this.state;
        return (
            <div>
                <Sidebar handleToggle={this.handleToggle}/>
                <div className="main-container">
                    <h2>Instruments List</h2>
                    <ul>
                    {/* {isAlphabetical === false ? this.showInstruments(instruments) : this.showInstruments(filtered)} */}
                    {this.showInstruments(instruments)}
                    </ul>
                </div>
                
            </div>
        );
    }
    
}

export default AllInstruments;
