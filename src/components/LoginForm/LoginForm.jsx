import { useState } from 'react';
import { login } from '../../api/auth';
import './LoginForm.scss';

const INITIAL_STATE = {
    email: '',
    password: '',
}

const LoginForm = (props) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);

    const handleFormSubmit = async ev => {
        ev.preventDefault();

        const user = await login(formData);

        if (user.message) {
            setError(user.message);
        } else {
            props.saveUser(user);
            setFormData(INITIAL_STATE);
            setError(null);
        }
    };

    const handleInputChange = ev => {
        const { name, value } = ev.target;

        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="form-container">
            <h3>Login</h3>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                </label>

                <div className="form-container__button">
                    <button type="submit">Access</button>
                </div>
            </form>

            {error && <div className="form-container__error">
                {error}
            </div>}
        </div>
    )
}

export default LoginForm;