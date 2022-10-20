import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

// enums
export const someAlertTypes = {
    danger: 'danger',
    info: 'info',
    warning: 'warning',
};
export const someSizeTypes = {
    small: 'small',
    normal: 'normal',
    big: 'big',
};

export const Some = ({
    alertType = someAlertTypes.info, // default type
    size = someSizeTypes.normal,
    isDisabled = false,
}) => {

    const res = classnames({
        [styles.danger]: true
    }); // ''
    const blockClass = classnames(styles._, {
        [styles.disabled]: isDisabled,

        // alertType modifer
        [styles.danger]: alertType === someAlertTypes.danger,
        [styles.warning]: alertType === someAlertTypes.warning,
        [styles.info]: alertType === someAlertTypes.info,

        // size modifer
        [styles.big]: size === someSizeTypes.big,
        [styles.normal]: size === someSizeTypes.normal,
        [styles.small]: size === someSizeTypes.small,
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
            alertType={someAlertTypes.danger}
            title="Привет, ученики!"
        />

        {/* combain with other props */}
        <Some
            alertType={someAlertTypes.danger}
            isDisabled={true}
            title="Привет, ученики!"
        />
    </div>;
};