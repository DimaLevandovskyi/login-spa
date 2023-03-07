import React from 'react';
import LoginButtonConnect from '../Templates/Button/button';
import InputLoginWithErrorConnect from '../Templates/Inputs/login';
import InputPasswordWithErrorConnect from '../Templates/Inputs/password';

export default function Form() {
    return (
        <form action="/table">
            <InputLoginWithErrorConnect/>
            <InputPasswordWithErrorConnect/>
            <LoginButtonConnect />
        </form>
    );
}
