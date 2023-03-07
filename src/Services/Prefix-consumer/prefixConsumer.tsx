import React from 'react';
import { PagesContext } from '../Prefix-provider/prefix-provider';


function Prefix<T>(Wrapper: React.FC<T>) {
    return (props: T) => (
        <PagesContext.Consumer>
            {
                (prefix:string) => (
                    <Wrapper {...props} prefix={prefix}/>
                )
            }
        </PagesContext.Consumer>
    );
}

export default Prefix;
