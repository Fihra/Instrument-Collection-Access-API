const initialState = {
    instruments: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INSTRUMENTS":
            return {
                ...state,
                instruments: action.instruments
            }
        default:
            return state;
    }
}

export default mainReducer;