import React from 'react';

const InstrumentCard = (props) => {
    let selected = props.location.pathname.split("/")[2];

    let filtered = props.instruments.filter((instrument) => {
        return instrument.Name === selected;
    });

    const { Id, Name, Origin, Year } = filtered[0];
    return(
    
        <div className="instrument-card">
            <div className="name-container">
                <h3>Instrument: {Name}</h3>
            </div>
            
            <p>Origin: {Origin}</p>
            <p>Year: {Year}</p>
            <button onClick={()=>props.stageInstrument(Id)}>Add to Staging List</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default InstrumentCard;