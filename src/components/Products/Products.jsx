import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductsAsync } from '../../redux/slices/product.slice';
import { Product } from '../../components';
import './Products.scss';



const Products = () => {
    const products = useSelector(state => state.products.all);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products.length) dispatch(getAllProductsAsync());;
    }, []);

    return (
        <div>
            <h2 className='products__title'>Products</h2>
            <Product />
        </div>
    )
};

export default Products;