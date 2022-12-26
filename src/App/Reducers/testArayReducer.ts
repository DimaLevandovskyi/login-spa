
let SUMM_NUMBERS = 'SUMM-NUMBERS'

type initialStateType = {
    'number1': number
    'number2': number
    'summ': number | null
}

let initialState:initialStateType = {
    'number1': 5,
    'number2': 6,
    'summ': null
}

let ArrayReducer = (state = initialState, action) =>{
    if (action.type === SUMM_NUMBERS) {
        state.summ = state.number1 + state.number2
        return state
    } else {
        return state
    }
}

export const testArrayCreator = () => ({type: SUMM_NUMBERS})

export default ArrayReducer