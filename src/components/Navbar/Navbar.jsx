import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/user.slice';
import './Navbar.scss';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/');
    }

    return (
        <nav className="nav">
            <div className="nav__title">
                <Link to="/">
                    Circular
                </Link>
                {user &&
                    <span className="nav__text">
                        Welcome back, {user.name}!
                    </span>}
            </div>
            <ul className="nav__links">
                {!user && <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>}
                {!user && <li>
                    <Link to="/login">
                    Login
                    </Link>
                </li>}
                {user && <li>
                    <Link to="/products">
                        Products
                    </Link>
                </li>}
                {user && <li>
                    <Link to="/products/add-product">
                        Add your products!
                    </Link>
                    <button onClick={handleLogout}>Logout</button>
                </li>}
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);