import React from 'react';
import { LoginPageType } from '../../Types/types';
import { AppDispatch } from '../../App/Redux-store/redux-store';
import Layout from './wrapper';

type HeaderType = {
    loginPage: LoginPageType,
    dispatch: AppDispatch
}
export default function Header({ loginPage, dispatch }:HeaderType) {
    return (
        <Layout
            loginPage={loginPage}
            dispatch={dispatch} />
    );
}
