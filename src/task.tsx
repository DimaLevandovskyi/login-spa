import React from 'react'
import LoginPage from './Pages/LoginPage/login-page.tsx';
import Loyaut from './Pages/Loyaut/loyaut.tsx';
import TablePage from './Pages/TablePage/tablePage.tsx'
import Header from './Pages/Loyaut/Header/header.tsx'
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
