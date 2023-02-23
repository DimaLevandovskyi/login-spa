import { PagesContext } from '../Prefix-provider/prefix-provider';
import React from 'react';

type PropsType = {
    children: JSX.Element|JSX.Element[];
}
export default function LoginPrefix({ children }:PropsType) {
    return (
        <PagesContext.Consumer>
            {(prefix) => {
                return (
                    <>
                        {
                            React.Children.map(children, (child) =>
                                React.cloneElement(child, { ...child.props, prefix } as object)
                            )
                        }
                    </>
                );
            }}
        </PagesContext.Consumer>
    );
}
