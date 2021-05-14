import { useState } from 'react';
import { addProduct } from '../../api/products';
import { useHistory } from 'react-router-dom';
import './AddProduct.scss';

const INITIAL_STATE = {
    name: '',
    description: '',
    category: '',
    price: '',
    productImage: '',
};

const AddProduct = (props) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const history = useHistory();

    const submitProduct = ev => {
        ev.preventDefault();

        const formData = new FormData();

        for (let key in form) {
            formData.append(key, form[key]);
        };

        addProduct(formData);
        setForm(INITIAL_STATE);
        history.push('/');
    }

    const inputChange = ev => {
        const {name, value, type, files} = ev.target;

        setForm({
            ...form,
            [name]: type === 'file' ? files[0] : value
        });
    };

    return (
        <div className="product-form-container">
            <form
                className="product-form-container__form"
                onSubmit={submitProduct}
                method="POST"
                encType="multipart/form-data">
                <label className="product-form-container__field" htmlFor="name">
                    <p className="product-form-container__text">Name</p>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={inputChange}
                        value={form.name}
                    />
                </label>
                <label className="product-form-container__field" htmlFor="description">
                    <p className="product-form-container__text">Description</p>
                    <textarea
                        id="description"
                        name="description"
                        rows='4' 
                        cols='50'
                        onChange={inputChange}
                        value={form.description}
                    />
                </label>
                <label className="product-form-container__field" htmlFor="category">
                    <p className="product-form-container__text">Categoy</p>
                    <select 
                        id="category"
                        name="category"
                        onChange={inputChange}
                        value={form.category}>
                        <option value="">-</option>
                        <option value="Book">Book</option>
                        <option value="Film">Film</option>
                        <option value="Videogame">Videogame</option>
                        <option value="Boardgame">Boardgame</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label className="product-form-container__field" htmlFor="price">
                    <p className="product-form-container__text">Price</p>
                    <input
                        type="float"
                        id="price"
                        name="price"
                        placeholder="Price"
                        onChange={inputChange}
                        value={form.price}
                    />
                </label>
                <label className="product-form-container__field" htmlFor="productImage">
                    <p className="product-form-container__text">Photo</p>
                    <input
                        type="file"
                        id="productImage"
                        name="productImage"
                        onChange={inputChange}
                    />
                </label>
                <button className="product-form-container__button" type="submit">Sell</button>
            </form>
        </div>
    )

}

export default AddProduct;