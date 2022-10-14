
// const Alert = ({ text }) => <div className="alert">
//     {text}
// </div>

// <Alert text="Внимание" />

// const Alert = ({ children }) => <div className="alert">
//     {children}
// </div>
//
// <Alert>Внимание!</Alert>
// <Alert>
//     <span>
//         Внимание!
//     </span>
// </Alert>
//
// <Alert>
//     <img src="./warning.png" />
// </Alert>





// import classnames from 'classnames';
//
// модификаторы
// const Alert = ({ children, danger, warning, info }) => {
//     const blockClass = classnames({
//         alert: true,
//         danger,
//         warning,
//         info,
//     });
//     return <div className={blockClass}>
//         {children}
//     </div>;
// }
//
// <Alert danger>Опасность</Alert>
// <Alert warning>Внимание</Alert>
// <Alert info>Для информации</Alert>



import classnames from 'classnames';

// enum

const alertTypes = {
    danger: 'danger',
    warning: 'warning',
    info: 'info',
}

const Alert = ({ children, type = alertTypes.info }) => {
    const blockClass = classnames({
        'alert',
        {
            alert_danger: type === alertTypes.danger,
            alert_warning: type === alertTypes.warning,
            alert_info: type === alertTypes.info
        }
    });

    return <div className={blockClass}>
        {children}
    </div>;
}

<Alert danger>Опасность</Alert>
<Alert warning>Внимание</Alert>
<Alert info>Для информации</Alert>


// import classnames from 'classnames';
//
// import styles from './Alert.module.css';
//
// const alertTypes = {
//     danger: 'danger',
//     warning: 'warning',
//     info: 'info',
// }
//
// // итоговый вариант с className
// const Alert = ({ children, type = alertTypes.info, className }) => {
//     const blockClass = classnames(
//         styles.block,
//         {
//             [styles.danger]: type === alertTypes.danger,
//             [styles.warning]: type === alertTypes.warning,
//             [styles.info]: type === alertTypes.info,
//             [className]: !!className
//         }
//     );
//
//     return <div className={blockClass}>
//         <div className={styles.title}></div>
//         {children}
//     </div>;
// }
//
// <Alert type={alertTypes.danger}>Опасность</Alert>
// // <div class="alert alert_danger">Опасность</div>
//
//
