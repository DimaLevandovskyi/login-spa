import React from 'react'
import LoginPage from './User/LoginPage/login-page.tsx';
import Loyaut from './User/Loyaut/loyaut.tsx';
import TablePage from './User/TablePage/tablePage.tsx'
import Header from './User/Loyaut/Header/header.tsx'
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
