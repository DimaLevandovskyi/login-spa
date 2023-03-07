import React from 'react';
import { LoginPageType } from '../../../Types/types';
import Prefix from '../Prefix-consumer/prefixConsumer';

type LoginErrorsType = {
    loginPage:LoginPageType,
    prefix?:string
}
function Errors({ loginPage, prefix }:LoginErrorsType) {
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

export default Prefix(Errors);
