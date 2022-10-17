import React, { useState } from 'react';

import styles from 'Some.module.css';

// empty function
const noop = () => {};

const Some = ({
    onChange = noop,
    value: initialValue = '',
}) => {
    // state
    const [value, setValue] = useState(initialValue);

    // handlers
    const handleChange = event => {
        const { target: { value } } = event;

        setValue(value); // set state
        onChange(value); // callback
    }
    
    return <div className={styles.some}>
        <div className={styles.title}>{title}</div>
        <input
            onChange={handleChange}
            value={value}
        />
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        {/* set state only */}
        <Some />

        {/* set state and callback */}
        <Some
            value={'some value'}
            onChange={value => console.log(value)}
        />
    </div>;
};
