import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const products = useSelector(state => state.products.all);

    return (
        <div className='products'>
            {products.map(p => <div key={p._id}>
            <div className='products__card'>
                {p.productImage && <img src={p.productImage} className='products__image' alt="{p.name}"/>}
                <Link className='products__link' to={`product/${p._id}`}>{p.name}</Link>
                <p className='products__text'>Category: {p.category}</p>
                <p className='products__text'>{p.description}</p>
                <p className='products__text'>Price: {p.price}.-€</p>
            </div>
            </div>)}
        </div>
    )
}

export default Product;