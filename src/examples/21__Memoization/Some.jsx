import React, { useCallback } from 'react';
import useSearch from './fetch-items';

function MyBigList({ term, onItemClick }) {
    const items = useSearch(term); // get list data

    return <div>{items.map(
        item => <div onClick={onItemClick}>
            {item}
        </div>)}
    </div>;
}

const List = React.memo(MyBigList);

export function MyParent({ term }) {
    const onItemClick = useCallback(event => {
        console.log('You clicked ', event.currentTarget);
    }, [term]);

    return (
        <List
            term={term}
            onItemClick={onItemClick}
        />
    );
}