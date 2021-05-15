import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../redux/slices/user.slice';
import { useHistory } from 'react-router-dom';
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
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        const form = new FormData();
        form.append('name', formFields.name);
        form.append('surname', formFields.surname);
        form.append('email', formFields.email);
        form.append('password', formFields.password);
        form.append('city', formFields.city);
        form.append('userImg', photo);

        dispatch(registerAsync(form));
        setFormFields(INITIAL_STATE);
        history.push('/');
    };

    const handleImg = (ev) => {
        let reader = new FileReader();
        let file = ev.target.files[0];
        reader.onloadend = () => {
            setPhoto(file);
            setPhotoPreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        setFormFields({ ...formFields, [name]: value });

        console.log(formFields);
    };

    return (
        <div className="register-form-container">
            <h3 className="register-form-container__title">Register</h3>
            <form
                className="register-form-container__field"
                onSubmit={handleFormSubmit}
                method='POST'
                encType='multipart/form-data'>
                <label className="register-form-container__field" htmlFor="name">
                    <p className="register-form-container__text">Name</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={formFields.name}
                    />
                </label>

                <label className="register-form-container__field" htmlFor="surname">
                    <p className="register-form-container__text">Surname</p>
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        onChange={handleInputChange}
                        value={formFields.surname}
                    />
                </label>

                <label className="register-form-container__field" htmlFor="email">
                    <p className="register-form-container__text">Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formFields.email}
                    />
                </label>

                <label className="register-form-container__field" htmlFor="password">
                    <p className="register-form-container__text">Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        onChange={handleInputChange}
                        value={formFields.password}
                    />
                </label>

                <label className="register-form-container__field" htmlFor="city">
                    <p className="register-form-container__text">City</p>
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

                <label className="register-form-container__field" htmlFor="userImg">
                    <p className="register-form-container__text">Photo</p>
                    <input
                        type="file"
                        id="userImg"
                        name="userImg"
                        onChange={handleImg}
                        value={formFields.userImg}
                    />
                </label>
                {photoPreview && <div>
                <img className="register-form-container__image" src={photoPreview} alt='preview' />
                </div>}


                <div>
                    <button className="register-form-container__button" type="submit">Send</button>
                </div>
            </form>

            {error && <div className="register-form-container__error">
                {error}
            </div>}
        </div>
    )
}

export default RegisterForm;