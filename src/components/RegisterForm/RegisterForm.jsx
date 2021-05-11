import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../redux/slices/user.slice';
import './RegisterForm.scss';

const INITIAL_STATE = {
    name: '',
    surname: '',
    email: '',
    password: '',
    city: '',
    userImg: '',
};

const RegisterForm = (props) => {
    const [formFields, setFormFields] = useState(INITIAL_STATE);
    const {error} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        dispatch(registerAsync(formFields));
        setFormFields(INITIAL_STATE);
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        setFormFields({ ...formFields, [name]: value });

        console.log(formFields);
    };

    return (
        <div className="form-container">
            <h3>Register</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={formFields.name}
                    />
                </label>

                <label htmlFor="surname">
                    <p>Surname</p>
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        onChange={handleInputChange}
                        value={formFields.surname}
                    />
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formFields.email}
                    />
                </label>

                <label htmlFor="password">
                    <p>Contraseña</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        onChange={handleInputChange}
                        value={formFields.password}
                    />
                </label>

                <label htmlFor="city">
                    <p>City</p>
                    <select id="city"
                        name="city"
                        onChange={handleInputChange}
                        value={formFields.city}>
                        <option value="">-</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Granada">Granada</option>
                        <option value="Vigo">Vigo</option>
                        <option value="San Sebastian">San Sebastian</option>
                    </select>
                </label>

                <label htmlFor="userImg">
                    <p>Photo</p>
                    <input type="file" id="userImg" name="userImg" onChange={handleInputChange} value={formFields.userImg}/>
                </label>


                <div className="form-container__button">
                    <button type="submit">Send</button>
                </div>
            </form>

            {error && <div className="form-container__error">
                {error}
            </div>}
        </div>
    )
}

export default RegisterForm;