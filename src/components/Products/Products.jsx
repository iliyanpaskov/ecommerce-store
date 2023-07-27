import { useContext, useEffect } from 'react';
import { getAllProducts } from '../../services/products';
import  {ProductsDataContext} from '../context/ProductsDataContext.jsx'
import './Products.scss';

const Products = () => {
    const { setProductsData} = useContext(ProductsDataContext);
    useEffect(() => {
        async function getAll() {
            const res = await getAllProducts();
            setProductsData(res);
        }
        getAll();
    }, []);
    
    return (
        <main className="main">
            
        </main>
    )
}

export default Products;