import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoginReducer from '../Reducers/loginPage/loginReducer';


const reducers = combineReducers({
    pages: LoginReducer
});

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
