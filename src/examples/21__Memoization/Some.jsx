import React, { useState, useCallback } from 'react';

const noop = () => {};

// smart component (container)
const SomeContainer = ({ surname }) => {
    // state
    const [name, setName] = useState('');

    // memoization
    // https://reactjs.org/docs/hooks-reference.html#usememo
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    // https://reactjs.org/docs/react-api.html#reactmemo
    const handleChange = useCallback(({ target: { value } }) => {
        setName(`${surname}: ${value}`);
    }, [surname]);

    return <input
        value={name}
        onChange={handleChange}
    />;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        <SomeContainer />
    </div>;
};
