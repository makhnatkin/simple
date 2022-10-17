import React from 'react';

import styles from './Some.module.css';

const Item = ({ id = '', label = '' }) => <li>{id} – {title}</li>;

const Some = ({ list = [], title = '' }) =>
    <div className={styles.some}>
        <div className={styles.title}>{title}</div>
        <ul className={styles.list}>
            {list.map(item => <Item
                id={item.id}
                {/* https://reactjs.org/docs/lists-and-keys.html */}
                key={item.id}
                label={item.label}
            />)}
        </ul>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <Some />;
};
