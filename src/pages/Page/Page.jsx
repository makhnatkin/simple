import React from 'react';

import { Some } from '../../examples/17__StateAndHandlers/Some'

export const Page = () => {

    return <>
        <h1>Page</h1>
        <Some
            value={'some value'}
            onChange={value => console.log(value)}
        />
    </>;
};