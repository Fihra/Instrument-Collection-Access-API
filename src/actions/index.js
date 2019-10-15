import axios from 'axios';

const API = 'http://localhost:52371/api/instruments/';

//Fetch API for All Instruments
export function loadInstruments(){
    return(dispatch) => {
        axios.get(`${API}/all`)
        .then(resp => { 
            dispatch(getInstruments(resp.data));
        })
    }
}

export function getInstruments(instruments){
    return {
        type: "FETCH_INSTRUMENTS",
        instruments: instruments
    }
}

//TODO Refactor without doing another API call
//Fetch API for One Instrument
export function showInstrument(id){
    console.log(id);
    return((dispatch) => {
        axios.get(`${API}/${id}`)
        .then(resp => {
            dispatch(oneInstrument(resp.data));
        })
    })

}

export function oneInstrument(instrument){
    return {
        type: "SELECT_INSTRUMENT",
        oneInstrument: instrument
    }
}