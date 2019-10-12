const initialState = {
    instruments: [],
    oneInstrument: {}
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INSTRUMENTS":
            return {
                ...state,
                instruments: action.instruments
            }
        case "SELECT_INSTRUMENT":
            return {
                oneInstrument: action.oneInstrument
            }
        default:
            return state;
    }
}

export default mainReducer;