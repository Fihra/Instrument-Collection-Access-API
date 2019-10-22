const initialState = {
    instruments: [],
    stage: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INSTRUMENTS":
            return {
                ...state,
                    instruments: action.instruments
            }
        //TODO: DELETE INSTRUMENT
        case "DELETE_INSTRUMENT":
            const instrumentID = action.deletedInstrument;
            return {
                ...state.filter(instrument => instrument.ID !== instrumentID)
            }
        case "ADD_TO_STAGE":
            return {
                ...state,
                stage: [...state.stage, action.stageInstrument]
            }
        default:
            return state;
    }
}

export default mainReducer;