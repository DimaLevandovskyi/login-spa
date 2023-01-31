import React from 'react';
import LoginPage from './Pages/LoginPage/page';
import Layout from './GlobalComponent/Layout/layout';
import TablePage from './Pages/TablePage/page';
import Header from './GlobalComponent/Layout/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppDispatch, RootState } from './App/Redux-store/redux-store';

type TaskType = {
    state:RootState,
    dispatch:AppDispatch
}

export default function Task({ state, dispatch }:TaskType) {
    return (
        <Layout>
            <BrowserRouter>
                <Header dispatch={dispatch} loginPage={state.pages.loginPage} />
                <Routes>
                    <Route path="/login" element={<LoginPage dispatch={dispatch} loginPage={state.pages.loginPage} />} />
                    <Route path="/table" element={<TablePage />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}
