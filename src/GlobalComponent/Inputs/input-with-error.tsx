import React from 'react';
import InputError from './input-error';

type propsType = {
    errorEmail:boolean,
    value:string,
    enterData: (value:string) => void,
    type:string,
    placeholder:string,
    className:string,
    errorPassword:boolean,
}
export default function InputWithError(
    { enterData, value, errorEmail, type, placeholder, className, errorPassword }:propsType) {
    return (
        <div className="login__inputs-block">
            <input
                onChange={(e) => { enterData(e.target.value); }}
                placeholder={placeholder}
                className={className}
                type={type}
                value={value} />
            <InputError
                errorType={errorEmail}
                errorText='Your Email is incorrect'/>
            <InputError
                errorType={errorPassword}
                errorText='The password must have uppercase and
                lowercase latin letters, one symbol, numbers and length is at least 6 elements'/>
        </div>
    );
}
