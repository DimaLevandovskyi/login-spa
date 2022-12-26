import React from 'react'
import LoginPage from './User/LoginPage/login-page.tsx';
import Loyaut from './User/Loyaut/loyaut.tsx';
import TablePage from './User/TablePage/tablePage.tsx'
import Header from './User/Loyaut/Header/header.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function task(props) {
    console.log(props,'qfg bfb');
    return (
        <Loyaut>
            <BrowserRouter>
                <Header state={props.state} dispatch={props.dispatch} loginPage={props.state.pages.loginPage} />
                <Routes>
                    <Route path="/login" element={<LoginPage dispatch={props.dispatch} loginPage={props.state.pages.loginPage} />}  />
                    {/* <Route path="/" element={<LoginPage dispatch={props.dispatch} loginPage={props.state.pages.loginPage}/>} /> */}
                    <Route path="/table" element={<TablePage />} />
                </Routes>
            </BrowserRouter>
        </Loyaut>
    )
}
