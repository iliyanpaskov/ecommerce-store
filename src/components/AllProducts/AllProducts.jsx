import { useContext, useEffect, useState } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import NotAvailable from '../common/NotAvailable/NotAvailable';
import ProductsCount from '../ProductsCount/ProductsCount';
import '../../products-styles/ProductsGridZoneStyles.scss';

const AllProducts = () => {

    const { products, allProducts } = useContext(ProductsDataContext);
    const [showLimit, setShowLimit] = useState(12);
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(() => {
        setIsDisabled(false);
    }, [products, showLimit])

    const productsCount = allProducts.length;
    const showProducts = products.slice(0, showLimit);

    const clickHandler = (arr, checkArr) => {
        arr = [...checkArr];
        if (showLimit < arr.length) {
            setShowLimit(showLimit + 12)
            arr = arr.slice(0, showLimit + 12)
            if (showLimit + 12 > arr.length) {
                setShowLimit(arr.length);
                setIsDisabled(true)
            }
        } else {
            setShowLimit(arr.length);
            setIsDisabled(true)
        }
    }

    return (
        <section className='grid__wrapper'>
            {
                productsCount > 0
                    ? <>
                        <section className='grid'>
                            {showProducts.map(product => <ProductsGridCard key={product.objectId} product={product} />)}
                        </section>
                        <ProductsCount count={productsCount} limit={showLimit} arrLength={allProducts.length} />
                        <button className='grid__button' disabled={isDisabled} onClick={((e) => clickHandler(showProducts, allProducts))}>load more</button>
                    </>
                    : <NotAvailable />

            }
        </section>
    )
}

export default AllProducts;