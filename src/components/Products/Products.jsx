import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllProducts } from '../../services/products';
import { ProductsDataContext } from '../../contexts/ProductsDataContext.jsx'
import Filter from '../Filter/Filter';
import Category from '../Category/Category';
import Trainers from '../Trainers/Trainers';
import AllProducts from '../AllProducts/AllProducts';
import './Products.scss';

const Products = () => {
    const { setProductsData,setAllProductsData } = useContext(ProductsDataContext);
    useEffect(() => {
        async function getAll() {
            const res = await getAllProducts();
            setProductsData(res);
            setAllProductsData(res);
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
                        <Route path='/' element={<AllProducts />} />
                        <Route path='/trainers' element={< Trainers />} />

                    </Routes>
                </div>
            </section>
        </main>
    )
}

export default Products;