import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllProducts } from '../../services/products';
import { ProductsDataContext } from '../../contexts/ProductsDataContext.jsx'
import Filter from '../Filter/Filter';
import Category from '../Category/Category';
import Trainers from '../Trainers/Trainers';
import AllProducts from '../AllProducts/AllProducts';
import TShirts from '../TShirts/TShirts';
import './Products.scss';
import Pants from '../Pants/Pants';
import Loader from '../common/Loader/Loader';

const Products = () => {
    const { setProductsData, setAllProductsData, isLoading, setIsLoading} = useContext(ProductsDataContext);
    useEffect(() => {
        async function getAll() {
            const res = await getAllProducts();
            setProductsData(res);
            setAllProductsData(res);
            setIsLoading(false);
        }
        getAll();
    }, []);



    return (

        <main className='main__wrapper'>
            {
                isLoading
                    ? <Loader />
                    : <section className="main">
                        <Category />
                        <div className='main__content'>
                            <Filter />
                            <Routes>
                                <Route path='/' element={<AllProducts />} />
                                <Route path='/trainers' element={< Trainers />} />
                                <Route path='/t-shirts' element={<TShirts />} />
                                <Route path='/pants' element={<Pants />} />
                            </Routes>
                        </div>
                    </section>
            }
        </main>
    )
}

export default Products;