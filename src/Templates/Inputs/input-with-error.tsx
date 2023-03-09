import React from 'react';
import WrapperError from './wrapper-error';
import Prefix from '../../Services/Prefix-consumer/prefixConsumer';

type propsType = {
    errorEmail:boolean,
    value:string,
    enterData: (value:string) => void,
    type:string,
    placeholder:string,
    className:string,
    errorPassword:boolean,
    prefix:string
}
function InputWithError(
    { enterData, value, errorEmail, type, placeholder, className, errorPassword, prefix }:propsType) {
    return (
        <div className={`${prefix}__inputs-block`}>
            <input
                onChange={(e) => { enterData(e.target.value); } }
                placeholder={placeholder}
                className={className}
                type={type}
                value={value} />
            <WrapperError
                errorType={errorEmail}
                errorText='Your Email is incorrect'/>
            <WrapperError
                errorType={errorPassword}
                errorText='The password must have uppercase and
                lowercase latin letters, one symbol, numbers and length is at least 6 elements'/>
        </div>
    );
}

export default Prefix(InputWithError);

