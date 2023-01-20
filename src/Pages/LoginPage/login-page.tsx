import React from 'react';
import LoginWrapper from './login-wrapper';
import LoginForm from './login-form';
import LoginErrors from './login-errors';
import Heading from '../../Pages/GlobalComponent/Heading/heading';

export default function LoginPage({ dispatch, loginPage }) {

    return (
        <LoginWrapper>
            <Heading className='login__title' heading='Login'/>
            <LoginErrors
                loginPage={loginPage} />
            <LoginForm
                loginPage={loginPage}
                dispatch={dispatch} />
        </LoginWrapper>
    );
}
