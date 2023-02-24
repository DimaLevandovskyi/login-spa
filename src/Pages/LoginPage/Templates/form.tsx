import React from 'react';
import LoginButtonConnect from '../Templates/Button/button';
import InputLoginWithErrorConnect from '../Templates/Inputs/login';
import InputPasswordWithErrorConnect from '../Templates/Inputs/password';
import LoginPrefix from '.././Prefix-consumer/prefixConsumer';

export default function Form() {
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
