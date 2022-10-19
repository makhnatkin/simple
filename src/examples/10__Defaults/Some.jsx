import React from 'react';
import classnames from 'classnames';

import styles from 'Some.module.css';

const noop = () => {};

const Some = ({
    // props with default values
    isDisabled = false,
    isSelected = false,
    onChange = noop, // empty function
    type = 'checkbox',
    value = ''
}) => {
    const blockClass = classnames(styles.some, {
        [styles.disabled]: isDisabled,
        [styles.selected]: isSelected,
    });

    return <div className={blockClass}>
        <div className={styles.title}>{title}</div>
        <input
            disabled={isDisabled}
            onChange={onChange}
            selected={isSelected}
            type={type}
            value={value}
        />
    </div>;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        <Some title="Привет, ученики!" />;

        {/* isSelected === false, isDisabled === true */}
        <Some
            isDisabled={true}
            title="Привет, ученики!"
        />;

        {/* isSelected === true, isDisabled === true */}
        <Some
            value="Иванов"
            isDisabled={true}
            isSelected={true}
            title="Привет, ученики!"
        />;
    </div>
};