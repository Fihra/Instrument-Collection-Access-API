import axios from 'axios';

const API = 'http://localhost:52371/api/instruments/all';

export function loadInstruments(){
    return(dispatch) => {
        axios.get(API)
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