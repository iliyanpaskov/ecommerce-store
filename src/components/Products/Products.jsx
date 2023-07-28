import { useContext, useEffect } from 'react';
import { getAllProducts } from '../../services/products';
import { ProductsDataContext } from '../context/ProductsDataContext.jsx'
import './Products.scss';
import Filter from '../Filter/Filter';
import Category from '../Category/Category';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

const Products = () => {
    const { setProductsData } = useContext(ProductsDataContext);
    useEffect(() => {
        async function getAll() {
            const res = await getAllProducts();
            setProductsData(res);
        }
        getAll();
    }, []);

    return (

        <main className='main__wrapper'>
            <section className="main">
                <Category />
                <div className='main__content'>
                    <Filter />
                    <ProductsGrid />
                </div>
            </section>
        </main>
    )
}

export default Products;