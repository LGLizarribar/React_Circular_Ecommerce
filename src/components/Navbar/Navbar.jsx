import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/user.slice';
import './Navbar.scss';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    return (
        <nav className="nav">
            <div>
                <Link to="/">
                    Circular
                </Link>
            </div>
            {!user && <div>
                <Link to="/register">
                    Register
                </Link>
            </div>}
            {!user && <div>
                <Link to="/login">
                    Login
                </Link>
            </div>}
            <div>
                <Link to="/products">
                    Products
                </Link>
            </div>
            {user && <div>
                <span className="nav__text">
                    Welcome back, {user.name}
                </span>
                <button onClick={() => dispatch(logoutUser())}>Logout</button>
            </div>}
        </nav>
    )
}

export default withRouter(Navbar);