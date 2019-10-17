import React from 'react';

class StageContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            toggleInstrument: false
            
        }
    }

    instrumentClick = (e) => {
        console.log("clicked");
    }

    listSavedList = (savedInstruments) => {
        return savedInstruments.map((instrument) => {
            return <li><button onClick={() => this.instrumentClick()}>{instrument.Name}</button></li>
        })
    }

    render(){
        console.log(this.props.stage)//contains the id's of the instruments
        console.log(this.props.instruments);

        //TODO: Got the Stage Array from State and Instruments Fetched State
        //Want to filter instruments to just the instruments based on the ids

        //Maybe do a fetch call here?
        let filteredArray = this.props.instruments.filter((instrument) => {
            for(let i = 0; i < this.props.stage.length; i++){
                if(instrument.Id === this.props.stage[i]){
                    return instrument;
                }
            }
        });
        console.log(filteredArray);
        //const { Id, Name, Origin, Year } = filtered[0];

        

        return(
            <div>
                <h3>Saved List</h3>
                <ul>
                    {this.listSavedList(filteredArray)}
                </ul>
            </div>
        )
    }
}

export default StageContainer;