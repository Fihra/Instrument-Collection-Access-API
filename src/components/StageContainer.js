import React from 'react';

class StageContainer extends React.Component{
    render(){
        console.log(this.props.stage)//contains the id's of the instruments
        console.log(this.props.instruments);

        //TODO: Got the Stage Array from State and Instruments Fetched State
        //Want to filter instruments to just the instruments based on the ids

        //Maybe do a fetch call here?
        let filteredArray = this.props.stage.map((instrument) => {
            // return instrument.Name === selected;
            let stuff = this.props.instruments.includes(instrument);
            return stuff;
        });
        console.log(filteredArray);
        //const { Id, Name, Origin, Year } = filtered[0];

        return(
            <div>
                
            </div>
        )
    }
}

export default StageContainer;