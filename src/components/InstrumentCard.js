import React from 'react';

const InstrumentCard = (props) => {
    const {Name, Origin, Year} = props.instrument;
    console.log(props.instrument);
    return(
        <div>
            <h3>Instrument: {Name}</h3>
            <p>Origin: {Origin}</p>
            <p>Year: {Year}</p>
        </div>
    )
}

export default InstrumentCard;