import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from "./task.tsx";
import store from "./App/Redux-store/redux-store";
import './globalStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let rendererDom = (state): void =>{
  root.render(
    <React.StrictMode>
      <Task state={state} dispatch={store.dispatch}/>
    </React.StrictMode>
  );
}

rendererDom(store.getState())

store.subscribe(()=>{
  rendererDom(store.getState())
})
