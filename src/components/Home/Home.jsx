import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductsAsync } from '../../redux/slices/product.slice';
import './Home.scss';

const Home = () => {
    const products = useSelector(state => state.products.all);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products.length) dispatch(getAllProductsAsync());;
    }, []);

    return (
        <main className="main">
            <h1 className="main__title">Welcome to Circular</h1>
            <p className="main__content">Get what you need. Sell what you don't.</p>
            <div className="main__images">
                {products.map(p => <div  key={p._id}>
                    {p.productImage && <img src={p.productImage} className='products__image' alt="{p.name}"/>}
                </div>)}
            </div>
        </main>
    )
}

export default Home;