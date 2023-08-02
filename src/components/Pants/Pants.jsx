import { useContext, useState, useEffect } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import NotAvailable from '../common/NotAvailable/NotAvailable';
import ProductsCount from '../ProductsCount/ProductsCount';
import '../../products-styles/ProductsGridZoneStyles.scss';

const Pants = () => {

    const { products } = useContext(ProductsDataContext);
    const [showLimit, setShowLimit] = useState(12);
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(() => {
        setIsDisabled(false);
    }, [products, showLimit])

    let pants = products.filter(product => product.type === 'pants');
    const allPants = [...pants];
    pants = pants.slice(0,showLimit);
    const productsCount = allPants.length;

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
                            {pants.map(product => <ProductsGridCard key={product.objectId} product={product} />)}
                        </section>
                        <ProductsCount count={productsCount} limit={showLimit} arrLength={allPants.length} />
                        <button className='grid__button' disabled={isDisabled} onClick={((e) => clickHandler(pants, allPants))}>load more</button>
                    </>
                    : <NotAvailable />
            }

        </section>
    )
}

export default Pants;    