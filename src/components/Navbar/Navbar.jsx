import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../api/auth';
import './Navbar.scss';

const Navbar = (props) => {
    // const history = useHistory();

    const logoutUser = async () => {
        try {
            await logout();
            props.deleteUser();
        } catch (error) {
            console.log('error', error);
        }
    };
    
    // console.log(props);

    return (
        <nav className="nav">
            <div>
                <Link to="/">
                    Circular
                </Link>
            </div>
            {!props.user && <div>
                <Link to="/register">
                    Register
                </Link>
            </div>}
            {!props.user && <div>
                <Link to="/login">
                    Login
                </Link>
            </div>}
            <div>
                <Link to="/products">
                    Products
                </Link>
            </div>
            {props.user && <div>
                <span className="nav__text">
                    Welcome back, {props.user.name}
                </span>
                <button onClick={logoutUser}>Logout</button>
            </div>}
        </nav>
    )
}

export default withRouter(Navbar);