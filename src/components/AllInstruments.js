import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class AllInstruments extends React.Component {
    constructor(){
        super();
        this.state = {
            searching: '',
            // isAlphabetical: false,
            // isClassification: false,
            // isYear: false,
            filterChoice: '',
            filtered: []
        }
    }

    //TODO: Figure out ASynchronous api data 
    // to filtered data
    componentDidMount(){
        this.setState({
            // isAlphabetical: false,
            // isClassification: false,
            // isYear: false,
            filtered: this.props.instruments
        })
    }
    componentWillUnmount(){
        this.setState({
            // isAlphabetical: false,
            // isClassification: false,
            // isYear: false,
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

    handleAlphabetical = () => {
        const alphabetically = this.state.filtered.sort((a, b) => {
            if(a.Name < b.Name) return -1;
            else if(a.Name > b.Name) return 1;
            return 0;
        })
        console.log(alphabetically);
    }

    handleClassification = () => {

    }

    handleYear = () => {
        
    }

    showInstruments = (allInstruments) => {
        console.log(allInstruments);
        console.log(this.state.filtered);
        let filtered = allInstruments;
        // //Check Filters here
        

        if(this.state.isAlphabetical || this.state.isClassification || this.state.isYear){
            
            if(this.state.isAlphabetical){
                this.handleAlphabetical(filtered);
            }
            else if(!this.state.isAlphabetical){
                return this.outputInstruments(allInstruments);
            }
            return this.outputInstruments(filtered);
        }else{
            // return allInstruments.map((instrument, i) => {
            //     return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
            // })
            return this.outputInstruments(allInstruments);
        }
  
    }

    outputInstruments = (theOutput) => {
        const array = theOutput;
        return array.map((instrument, i) => {
            return <li key={instrument.Name}><Link to={`/instruments/${instrument.Name}`}>{instrument.Name}</Link></li>
        })
    }

    handleToggle = (event) => {
        console.log(event.target);
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
