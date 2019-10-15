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
    
        <div>
            <h3>Instrument: {Name}</h3>
            <p>Origin: {Origin}</p>
            <p>Year: {Year}</p>
        </div>
    )
}

export default InstrumentCard;