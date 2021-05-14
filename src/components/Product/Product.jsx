import { useSelector } from 'react-redux';

const Product = (props) => {
    const products = useSelector(state => state.products.all);

    return (
        <div>
            {products.map(p => <div key={p._id}>
                {p.productImage && <img src={p.productImage} style={{width: '100px'}} alt="{p.name}"/>}
                <a href="/products/{p._id}">{p.name}</a>
                <p>Price: {p.price}</p>
            </div>)}
        </div>
    )
}

export default Product;