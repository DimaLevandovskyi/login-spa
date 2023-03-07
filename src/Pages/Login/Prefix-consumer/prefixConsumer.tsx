import React from 'react';
import {PagesContext} from '../Prefix-provider/prefix-provider';

type BaseProps = {
    prefix: string;
}

function Prefix<T extends BaseProps>(Wrapper: React.FC<T>) {
    return (props: T) => (
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