import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/slices/user.slice';
import { useHistory } from 'react-router-dom';
import './LoginForm.scss';

const INITIAL_STATE = {
    email: '',
    password: '',
}

const LoginForm = (props) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const {error} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = async ev => {
        ev.preventDefault();
        await dispatch(loginAsync(formData));
        history.push('/');
    };

    const handleInputChange = ev => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="login-form-container">
            <h3 className="login-form-container__title">Login</h3>

            <form className="login-form-container__form" onSubmit={handleFormSubmit}>
                <label className="login-form-container__field" htmlFor="email">
                    <p className="login-form-container__text">Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                </label>

                <label className="login-form-container__field" htmlFor="password">
                    <p className="login-form-container__text">Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                </label>

                <div>
                    <button className="login-form-container__button" type="submit">Access</button>
                </div>
            </form>

            {error && <div className="login-form-container__error">
                {error}
            </div>}
        </div>
    )
}

export default LoginForm;