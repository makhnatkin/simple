import React, { useState } from 'react';

import {
    Shop,
    ShopHeader,
    Menu,
    Input,
    Button
} from '../../components';


function Example({
    initialCount
}) {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

// const [value, setValue] = useState('');

export const MainPageContainer = ({ list }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const createHandleChange = (setter) => ({target: {value}}) => {
        setter(value);
    };

    const handleChangeName = createHandleChange(setName);
    const handleChangeSurnameName = createHandleChange(setSurname);

    return <MainPage
        list={list}
        name={name}
        onChangeName={handleChangeName}
        surname={surname}
        onChangeSurname={handleChangeSurnameName}
    />
}

export const MainPage = ({
    list,
    name,
    onChangeName,
    surname,
    onChangeSurname,
}) => {

    return <>
        <Button />
        <Example initialCount={12} />
        <Shop title="СберМегаСуперГлобалСтор">
            <ShopHeader>
                <Menu list={list} />
            </ShopHeader>
        </Shop>

        <Input
            onChange={onChangeName}
            value={name}
        />

        <Input
            placeholder="Введите фамилию"
            onChange={onChangeSurname}
            value={surname}
        />
    </>;

}

<MainPageContainer list={[{
    href: '/company',
    title: 'О компании'
}, {
    href: '/catalogue',
        title: 'Каталог'
}, {
    href: '/about',
    title: 'О нас'
}]} />







// import classnames from 'classnames';
//
// // css модули + элементы + модификаторы
// import styles from './Alert.module.css'
//
// const AlertTypes = {
//     danger: 'danger',
//     warning: 'warning',
//     info: 'info',
// }
//
// const Alert = ({ children, title, type = AlertTypes.info }) => {
//     const blockClass = classnames(
//         styles.block,
//         {
//             [styles.danger]: type === AlertTypes.danger,
//             [styles.warning]: type === AlertTypes.warning,
//             [styles.info]: type === AlertTypes.info,
//         }
//     );
//
//     return <div className={blockClass}>
//         <div className={styles.title}>{title}</div>
//         {children}
//     </div>;
// }
//
// <Alert title={'В этом случае'}>Для информации</Alert>
//
//

//
// import styles from './List.module.css';
//
// // список
// const List = ({ items }) => <ul className={styles.block}>
//     {list.map({ id, name }) => <li key={id} className={styles.item}>
//         {name}
//     </li>}
// </ul>;
//
// <List items={[{
//     id: 'some-1',
//
// }]}>
//
// // const f = () => {}
// // f()
// //
// // const C = () => {}
// // <C />
//
// // export const MainPage = () => <div className="shop">
// //     <header className="shop-header">
// //         <ul className="menu">
// //             <li className="menu__item">
// //                 О компании
// //             </li>
// //             <li className="menu__item">
// //                 Каталог
// //             </li>
// //         </ul>
// //     </header>
// // </div>;
