import React, { Fragment } from 'react';
import { ReactComponent as StarIcon } from '../../assets/star.svg'

const Simple = () => <div>Простой компонент</div>;

const SomeFragment = () => {
    return <>
        <Simple />
        <Simple />
        <Simple />
    </>
};

const SomeArray = () => {
    return [
        <Simple />,
        <Simple />
    ]
};

const TwoChildren = ({ icon, children }) => <div>
    <div>{icon}</div>
    <div>{children}</div>
</div>;

const InnerProps = ({
    inputProps = {},
    ...props
}) => <div {...props}>
    <input {...inputProps} />
</div>;

// ----------------------------------------
// usage
const App = () => {
    {/* <Fragment> === <> */}
    {/* https://reactjs.org/docs/fragments.html */}
    return <Fragment>
        <SomeFragment />
        <SomeArray />

        <TwoChildren icon={<StarIcon />}>
            <Simple />
        </TwoChildren>;

        <InnerProps tabIndex={-1} inputProps={{
            disabled: true,
            value: 'some value'
        }} />
    </Fragment>
};
