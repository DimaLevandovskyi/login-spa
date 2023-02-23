import React from 'react';
import LoginButtonConnect from '../Templates/Button/button';
import InputLoginWithErrorConnect from '../Templates/Inputs/login';
import InputPasswordWithErrorConnect from '../Templates/Inputs/password';
import LoginPrefix from '../PrefixConsumer/prefixConsumer';

export default function LoginForm() {
    return (
        <form action="/table">
            <LoginPrefix>
                <InputLoginWithErrorConnect/>
                <InputPasswordWithErrorConnect/>
                <LoginButtonConnect />
            </LoginPrefix>
        </form>
    );
}
