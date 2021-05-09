import { Route, Redirect } from 'react-router-dom';

const SecureRoute = (props) => {
    const { hasUser, ...restProps } = props;

    if (props.hasUser === null) {
        return <div>Loading...</div>;
    }

    if (props.hasUser) {
        return (
            <Route {...restProps} />
        );
    }

    if (!props.hasUser) {
        return (
            <Redirect to='/login' />
        );
    }
};

export default SecureRoute;
