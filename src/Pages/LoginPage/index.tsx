import React from 'react';
import Wrapper from './Templates/wrapper';
import Form from './Templates/form';
import Errors from './Errors/errors';
import Heading from '../../Templates/Heading/heading';
import { LoginPageType } from '../../Types/types';
import { AppDispatch } from '../../App/Redux-store/redux-store';
import LoginPrefix from '././Prefix-consumer/prefixConsumer';

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
                    <Errors loginPage={loginPage} />
                    <Form />
                </LoginPrefix>
            </Wrapper>
        </LoginPrefix>
    );
}
