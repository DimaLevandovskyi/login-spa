import React from 'react';
import { PagesContext } from '../Prefix-provider/prefix-provider';

const Prefix = (Wrapper:any) => (props:any) => {
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
