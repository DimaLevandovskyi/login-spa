import React from 'react';
import { LoginPageType } from '../../../Types/Types';
import { AppDispatch } from '../../../App/Redux-store/redux-store';
import HeaderLayout from './wrapper';

type HeaderType = {
    loginPage: LoginPageType,
    dispatch: AppDispatch
}
export default function Header({ loginPage, dispatch }:HeaderType) {
    return (
        <HeaderLayout
            loginPage={loginPage}
            dispatch={dispatch} />
    );
}
