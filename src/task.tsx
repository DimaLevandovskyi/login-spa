import React from 'react'
import LoginPage from './Pages/LoginPage/login-page';
import Loyaut from './Pages/Loyaut/loyaut';
import TablePage from './Pages/TablePage/tablePage'
import Header from './Pages/Loyaut/Header/header'
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Task({state, dispatch}) {
    return (
        <Loyaut>
            <BrowserRouter>
                    <Header state={state} dispatch={dispatch} loginPage={state.pages.loginPage} />
                    <Routes>
                        <Route path="/login" element={<LoginPage dispatch={dispatch} loginPage={state.pages.loginPage} />}  />
                        <Route path="/table" element={<TablePage />} />
                    </Routes>
            </BrowserRouter>
        </Loyaut>
    )
}
