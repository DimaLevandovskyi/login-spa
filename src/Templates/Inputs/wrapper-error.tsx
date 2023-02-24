import React from 'react';

type propsType = {
    errorText:string,
    errorType:boolean
}
export default function WrapperError({ errorText, errorType }:propsType) {
    return (
        <>
            {
                errorType ?
                    <div className='error'>{errorText}</div> :
                    null
            }
        </>
    );
}
