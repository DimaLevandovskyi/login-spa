import React from 'react';
import { LoginPageType } from '../../Types/Types';

type LoginErrorsType = {
    loginPage:LoginPageType
}
export default function LoginErrors({ loginPage }:LoginErrorsType) {
    return (
        <>
            {
                loginPage.wrongSubmit ?
                    <div className='login__errors'>You entered incorrect login details</div> :
                    null
            }
        </>
    );
}
