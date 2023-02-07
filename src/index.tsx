import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './task';
import store, { RootStore } from './App/Redux-store/redux-store';
import { Provider } from 'react-redux';
import './style.scss';
// import {StateType} from './Types/Types'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rendererDom = (store:RootStore):void => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <Task state={store.getState()} dispatch={store.dispatch}/>
            </Provider>
        </React.StrictMode>
    );
};


rendererDom(store);

store.subscribe(() => {
    rendererDom(store);
});
