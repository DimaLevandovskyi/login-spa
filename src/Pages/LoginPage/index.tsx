import React from 'react';
import Wrapper from './Templates/wrapper';
import LoginForm from './Templates/form';
import LoginErrors from './Errors/errors';
import Heading from '../../Templates/Heading/heading';
import { LoginPageType } from '../../Types/types';
import { AppDispatch } from '../../App/Redux-store/redux-store';
import LoginPrefix from './PrefixConsumer/prefixConsumer';

type LoginType = {
    dispatch:AppDispatch,
    loginPage:LoginPageType
}
export default function LoginPage({ loginPage }:LoginType) {
    return (
        <LoginPrefix>
            <Wrapper>
                <LoginPrefix>
                    <Heading heading='Login'/>
                    <LoginErrors loginPage={loginPage} />
                    <LoginForm />
                </LoginPrefix>
            </Wrapper>
        </LoginPrefix>
    );
}
