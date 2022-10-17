import React, { useState } from 'react';

const noop = () => {};

// pure component
const Some = ({
    name = '',
    surname = '',
    onNameChange = noop,
    onSurnameChange = noop,
}) => <div>
    <h1>Введите данные</h1>
    <input onChange={onNameChange} value={name} />
    <input onChange={onSurnameChange} value={surname} />
    <footer>Спасибо!</footer>
</div>

// smart component (container)
const SomeContainer = () => {

    // state
    // https://reactjs.org/docs/hooks-state.html
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    // handlers creator
    const createHandleChange = setter => ({ target: { value } }) => {
        setter(value);
    }

    // handlers
    const handleNameChange = createHandleChange(setName);
    const handleSurnameChange = createHandleChange(setSurname);

    return <Some
        name={name}
        onNameChange={handleNameChange}
        surname={surname}
        onSurnameChange={handleSurnameChange}
    />;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        <SomeContainer />
    </div>;
};
