import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SecureRoute = (props) => {
    const { hasUser } = useSelector(state => state.user );

    if (hasUser === null) {
        return <div>Loading...</div>;
    }

    if (hasUser) {
        return (
            <Route {...props} />
        );
    }

    if (hasUser) {
        return (
            <Redirect to='/login' />
        );
    }
};

export default SecureRoute;
