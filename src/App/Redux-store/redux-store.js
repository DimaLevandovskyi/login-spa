import { combineReducers, createStore } from 'redux'

import LoginReducer from "../Reducers/loginPage/loginReducer.ts";

let reducers = combineReducers({
    pages: LoginReducer
})

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store