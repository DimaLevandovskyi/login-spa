import React from 'react';
import { PagesContext } from '../Prefix-provider/prefix-provider';
import { PropsType } from '../Templates/wrapper';

const Prefix = (Wrapper:JSX.Element) => (props:PropsType) => {
    return (
        <PagesContext.Consumer>
            {
                (prefix) => (
                    <Wrapper {...props} prefix={prefix}/>
                )
            }
        </PagesContext.Consumer>
    );
};

export default Prefix;

