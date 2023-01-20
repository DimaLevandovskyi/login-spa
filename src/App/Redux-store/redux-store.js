import { combineReducers, createStore } from 'redux';

import LoginReducer from '../Reducers/loginPage/loginReducer.ts';

const reducers = combineReducers({
    pages: LoginReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
