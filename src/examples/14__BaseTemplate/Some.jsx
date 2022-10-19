import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

// base:
//  className
//  ...props
const Some = ({
    className,
    ...props
}) => {
    const blockClass = classnames(styles.some, className);

    return <div className={blockClass} {...props}>
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <Some />;
};
