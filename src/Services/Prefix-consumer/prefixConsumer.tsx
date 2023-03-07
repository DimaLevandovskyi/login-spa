import React from 'react';
import { PagesContext } from '../Prefix-provider/prefix-provider';

type HOCProps = {
    prefix: string
};

function Prefix<T extends HOCProps>(Wrapper: React.FC<T>) {
    return (props: Omit<T, 'prefix'>) => (
        <PagesContext.Consumer>
            {
                (prefix:string) => {
                    const mainProps = {
                        ...props,
                        prefix
                    } as T;

                    return (
                        <Wrapper {...mainProps}/>
                    )
                }
            }
        </PagesContext.Consumer>
    );
}

export default Prefix;
