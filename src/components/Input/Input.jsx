import React from 'react';
import cx from 'classnames';

import styles from './Input.module.css';

// uncontrolled
// умный
export const Input = ({
    placeholder = 'Введите имя',
    value,
    onChange,
    className,
    ...props
}) => {

    const blockClass = cx(styles._, {
        [className]: !!className
    });

    return <input
        className={blockClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
    />
}
