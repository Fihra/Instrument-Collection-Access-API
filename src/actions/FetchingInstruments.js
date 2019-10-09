import { fetchInstruments } from 'actions';

const FetchingInstruments = () => {
    const API = 'http://localhost:52371/api/instruments/all';

    return dispatch => {
        
        fetch(API)
        .then(resp => resp.json())
        .then(json => {
            dispatch(fetchInstruments(json));
        })
    }
}

export default FetchingInstruments;

//First Create Redux Action 

// export function fetchInstruments(){

//     const API = 'http://localhost:52371/api/instruments/all';
//     return dispatch =>{
//         dispatch(fetchingInstruments());
//         return fetch(API)
//             .then(resp => resp.json())
//             .then(json => {
//                 dispatch(fetch)
//             })
//     }
// }