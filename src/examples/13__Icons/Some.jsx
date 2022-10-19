import React from 'react';

{/* svgr webpack plugin is enabled */}
import { ReactComponent as StarIcon } from '../../assets/star.svg'

import styles from 'Some.module.css';

const Some = () => {
    return <div className={styles._}>
        {/* svg like component */}
        <StarIcon fill="#FFF" stroke="#000" />
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <Some />;
};
