import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

const Some = ({ title, isDanger }) => {
    const blockClass = classnames(styles._, {
        // modifer depends on the props
        [styles.danger]: isDanger
    });

    return <div className={blockClass}>
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        {/* isDanger === undefined */}
        <Some title="Привет, ученики!" />;

        {/* isDanger === true */}
        <Some title="Привет, ученики!" isDanger={true} />;

        {/* isDanger === true */}
        <Some title="Привет, ученики!" isDanger />;
    </div>
};