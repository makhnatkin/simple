import React, { useState, useEffect, useRef } from 'react';

const noop = () => {};

// smart component (container)
const SomeContainer = () => {
    // state
    const [name, setName] = useState('');
    const symbols = useRef(0);

    // handlers
    const handleChange = ({ target: { value } }) => {
        setName(value);
    }

    // effects
    // https://ru.reactjs.org/docs/hooks-reference.html#useref
    useEffect(() => {
        symbols.current += 1;
    }, [name]);

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
