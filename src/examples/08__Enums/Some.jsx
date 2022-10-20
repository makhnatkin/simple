import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

// enums
export const SomeAlertTypes = {
    danger: 'danger',
    info: 'info',
    warning: 'warning',
};

export const SomeSizeTypes = {
    small: 'small',
    normal: 'normal',
    big: 'big',
};


export const Some = ({
    alertType = SomeAlertTypes.info, // default type
    size = SomeSizeTypes.normal,
    isDisabled = false,
}) => {

    const res = classnames({
        [styles.danger]: true
    }); // ''
    const blockClass = classnames(styles._, {
        [styles.disabled]: isDisabled,

        // alertType modifer
        [styles.danger]: alertType === SomeAlertTypes.danger,
        [styles.warning]: alertType === SomeAlertTypes.warning,
        [styles.info]: alertType === SomeAlertTypes.info,

        // size modifer
        [styles.big]: size === SomeSizeTypes.big,
        [styles.normal]: size === SomeAlertTypes.normal,
        [styles.small]: size === SomeAlertTypes.small,
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
            alertType={SomeAlertTypes.danger}
            title="Привет, ученики!"
        />

        {/* combain with other props */}
        <Some
            alertType={SomeAlertTypes.danger}
            isDisabled={true}
            title="Привет, ученики!"
        />
    </div>;
};