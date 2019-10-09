// const reducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'INCREMENT': 
//             return state + 1
//         case 'DECREMENT': 
//             return state - 1
//         case 'RESET': 
//             return 0
//         default: 
//             return state
//     }
// }

const initialState = {
    instruments: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHINSTRUMENTS':
            return{
                ...state,
                instruments: action.payload
            }
        default:
            return state;
    }
}   

export default reducer; 