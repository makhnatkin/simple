import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

// enums
export const someTypes = {
    danger: 'danger',
    info: 'info',
    warning: 'warning',
};

export const Some = ({
    alertType = someTypes.info, // default type
    isDisabled = false,
}) => {
    const blockClass = classnames(styles._, {
        [styles.disabled]: isDisabled,

        // enums
        [styles.danger]: alertType === someTypes.danger,
        [styles.warning]: alertType === someTypes.warning,
        [styles.info]: alertType === someTypes.info,
    });

    return <div className={blockClass}>
        <div className={styles.title}>{title}</div>
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        {/* alertType === someTypes.info */}
        <Some title="Привет, ученики!" />

        {/* alertType === someTypes.danger */}
        <Some
            alertType={someTypes.danger}
            title="Привет, ученики!"
        />

        {/* combain with other props */}
        <Some
            alertType={someTypes.danger}
            isDisabled={true}
            title="Привет, ученики!"
        />
    </div>;
};