import React from 'react';
import Wrapper from './wrapper';
import LoginForm from './form';
import LoginErrors from './errors';
import Heading from '../../GlobalComponent/Heading/heading';
import { LoginPageType } from '../../Types/Types';
import { AppDispatch } from '../../App/Redux-store/redux-store';

type LoginType = {
    dispatch:AppDispatch,
    loginPage:LoginPageType
}
export default function LoginPage({ loginPage }:LoginType) {
    return (
        <Wrapper>
            <Heading className='login__title' heading='Login'/>
            <LoginErrors loginPage={loginPage} />
            <LoginForm />
        </Wrapper>
    );
}
