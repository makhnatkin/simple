import React, { useState, useEffect } from 'react';

const noop = () => {};

const mock = [{
    id: '1',
    title: 'sdfsdf'
}, {
    id: '2',
    title: 'ssdsfdfdfgh'
}, {
    id: '3',
    title: 'ssdfdfhgdfg'
}];

const List = ({items = []}) => <ul>{items.map(({id, title}) => <li key={id}>
        {title}
    </li>)}
</ul>

// smart component (container)
export const SomeContainer = () => {
    // state
    const [posts, setPosts] = useState(mock);
    // effects
    // https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper
    // name changed ---> callback func called
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    useEffect(() => {
        console.log('posts', posts)
    }, [posts])

    return <List items={posts} />;
}

// ----------------------------------------
// usage
const App = () => {
    return <div>
        <SomeContainer />
    </div>;
};
