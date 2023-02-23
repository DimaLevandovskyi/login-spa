import React from 'react';
import { LoginPageType } from '../../../Types/types';

type LoginErrorsType = {
    loginPage:LoginPageType,
    prefix?:string
}
export default function LoginErrors({ loginPage, prefix }:LoginErrorsType) {
    return (
        <>
            {
                loginPage.wrongSubmit ?
                    <div className={`${prefix as string}__errors`}>You entered incorrect login details</div> :
                    null
            }
        </>
    );
}
