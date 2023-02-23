import React from 'react';
import LoginPage from './Pages/LoginPage';
import Layout from './Templates/Layout/layout';
import TablePage from './Pages/TablePage';
import Header from './Templates/Layout/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppDispatch, RootState } from './App/Redux-store/redux-store';
import PrefixProvider from './Pages/LoginPage/Prefix-provider/prefix-provider';

type TaskType = {
    state: RootState,
    dispatch: AppDispatch
}
export default function Task({ state, dispatch }:TaskType) {
    return (
        <PrefixProvider>
            <Layout>
                <BrowserRouter>
                    <Header dispatch={dispatch} loginPage={state.pages.loginPage} />
                    <Routes>
                        <Route path="/login" element={<LoginPage dispatch={dispatch} loginPage={state.pages.loginPage} />} />
                        <Route path="/table" element={<TablePage />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </PrefixProvider>
    );
}
