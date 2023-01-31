import React from 'react';
import LoginButtonConnect from './Button/button';
import InputLoginWithErrorConnect from './Inputs/login';
import InputPasswordWithErrorConnect from './Inputs/password';

export default function LoginForm() {
    return (
        <form action="/table">
            <InputLoginWithErrorConnect/>
            <InputPasswordWithErrorConnect/>
            <LoginButtonConnect />
        </form>
    );
}
