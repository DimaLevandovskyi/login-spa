import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginPageReducers } from '../Reducers/loginPage/composeReducers';

const reducers = combineReducers({
    pages: loginPageReducers
});

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>

export type RootStore = typeof store

export type AppDispatch = typeof store.dispatch
