import React from 'react';
import Wrapper from './Templates/wrapper';
import Form from './Templates/form';
import Errors from './Errors/errors';
import Heading from '../../Templates/Heading/heading';
import { LoginPageType } from '../../Types/types';
import { AppDispatch } from '../../App/Redux-store/redux-store';
import PrefixProvider from '../../Pages/Login/Prefix-provider/prefix-provider';

type LoginType = {
    dispatch:AppDispatch,
    loginPage:LoginPageType
}

function LoginPage({ loginPage }:LoginType) {
    return (
        <PrefixProvider prefix="login">
            <Wrapper>
                <Heading heading='Login'/>
                <Errors loginPage={loginPage} />
                <Form />
            </Wrapper>
        </PrefixProvider>
    );
}


export default LoginPage;
