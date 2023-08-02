import { useContext, useState, useEffect } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import NotAvailable from '../common/NotAvailable/NotAvailable';
import ProductsCount from '../ProductsCount/ProductsCount';
import '../../products-styles/ProductsGridZoneStyles.scss';

const TShirts = () => {

    const { products } = useContext(ProductsDataContext);
    const [showLimit, setShowLimit] = useState(12);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(false);
    }, [products, showLimit])

    let tshirts = products.filter(product => product.type === 'tshirts');
    const allTShirts = [...tshirts];
    tshirts = tshirts.slice(0, showLimit);
    const productsCount = allTShirts.length;


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
                            {tshirts.map(product => <ProductsGridCard key={product.objectId} product={product} />)}
                        </section>
                        <ProductsCount count={productsCount} limit={showLimit} arrLength={allTShirts.length} />
                        <button className='grid__button' disabled={isDisabled} onClick={((e) => clickHandler(tshirts, allTShirts))}>load more</button>
                    </>
                    : <NotAvailable />
            }

        </section>
    )
}

export default TShirts;    