import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from "./task.tsx";
import store from "./App/Redux-store/redux-store";
import { Provider } from 'react-redux'
import './style.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let rendererDom = (store) =>{
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Task state={store} dispatch={store.dispatch}/>
      </Provider>
    </React.StrictMode>
  );
}
  

rendererDom(store.getState())

store.subscribe(()=>{
  rendererDom(store.getState())
})