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

export function deleteInstrument(id){
    return((dispatch) => {
        axios.delete(`${API}/${id}/delete`)
        .then(resp => {
            dispatch(deletingInstrument(id));
        })
    })
}

export function deletingInstrument(instrument){
    return{
        type: "DELETE_INSTRUMENT",
        deletedInstrument: instrument
    }
}

//TODO Refactor without doing another API call
//Fetch API for One Instrument
export function showInstrument(id){
    console.log(id);
    return((dispatch) => {
        axios.get(`${API}/${id}`)
        .then(resp => {
            dispatch(stageInstrument(resp.data));
        })
    })
}

export function stageInstrument(instrument){
    return {
        type: "ADD_TO_STAGE",
        stageInstrument: instrument
    }
}
