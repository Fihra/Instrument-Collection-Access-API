import React from 'react';

const InstrumentCard = (props) => {
    //const {Name, Origin, Year} = props.instrument;
    //console.log(props.location.pathname.split("/")[2])
    let selected = props.location.pathname.split("/")[2];
    //console.log(selected);

    //console.log(props.instruments);
    let filtered = props.instruments.filter((instrument) => {
        return instrument.Name === selected;
    });

    console.log(filtered[0].Name);
    const {Name, Origin, Year } = filtered[0];
    return(
    
        <div className="instrument-card">
            <div className="name-container">
                <h3>Instrument: {Name}</h3>
            </div>
            
            <p>Origin: {Origin}</p>
            <p>Year: {Year}</p>
            <button>Add to Staging List</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default InstrumentCard;