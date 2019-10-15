// const initialState = {
//     instruments: [],
//     oneInstrument: {}
// }

const initialState = {
    instruments: [],
    oneInstrument: {}
}

const mainReducer = (state = initialState, action) => {
    console.log(action.instruments);
    switch(action.type){
        case "FETCH_INSTRUMENTS":
            return {
                ...state,
                    instruments: action.instruments
            }
        case "SELECT_INSTRUMENT":
            return {
                ...state,
                oneInstrument: action.oneInstrument
            }
        default:
            return state;
    }
}

export default mainReducer;