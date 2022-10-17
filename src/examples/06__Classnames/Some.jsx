import React from 'react';
// classnames
import classnames from 'classnames';

import styles from 'Some.module.css';

const Some = ({ title }) => {
    // classnames helps to concat strings
    const blockClass = classnames(styles.some, styles.danger);

    return <div className={blockClass}>
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <Some title="Привет, ученики!" />;
};