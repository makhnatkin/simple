import React from 'react';

import styles from 'Some.module.css';

const Some = ({
    title,
    ...props
}) => {

    return <div className={styles._} {...props}>
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        <Some title="Привет, ученики!" />;

        {/* ...props */}
        {/* https://reactjs.org/docs/dom-elements.html */}
        <Some title="Привет, ученики!" tabIndex="-1" />;
    </div>
};