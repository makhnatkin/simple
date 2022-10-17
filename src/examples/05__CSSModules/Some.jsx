import React from 'react';

import styles from 'Some.module.css'; // CSS modules

const Some = ({ title }) => <div className={`${styles.some} ${styles.danger}`}>
    <div className={styles.title}>{title}</div>
</div>;

// ----------------------------------------
// usage
const App = () => {
    return <Some title="Привет, ученики!" />;
};