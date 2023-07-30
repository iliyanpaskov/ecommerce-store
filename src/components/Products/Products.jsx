import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllProducts } from '../../services/products';
import { ProductsDataContext } from '../../context/ProductsDataContext.jsx'
import Filter from '../Filter/Filter';
import Category from '../Category/Category';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import Trainers from '../Trainers/Trainers';
import './Products.scss';

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
                    <Routes>
                        <Route path='/' element= {<ProductsGrid />}/>
                        <Route path='/trainers' element= {< Trainers/>}/>
                        
                    </Routes>
                </div>
            </section>
        </main>
    )
}

export default Products;