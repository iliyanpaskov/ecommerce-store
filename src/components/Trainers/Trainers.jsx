import { useContext, useState, useEffect } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import NotAvailable from '../common/NotAvailable/NotAvailable';
import '../../products-styles/ProductsGridZoneStyles.scss';
import ProductsCount from '../ProductsCount/ProductsCount';

const Trainers = () => {

    const { products } = useContext(ProductsDataContext);
    const [showLimit, setShowLimit] = useState(8);
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(() => {
        setIsDisabled(false);
    }, [products, showLimit])

    let trainers = products.filter(product => product.type === 'trainers');
    const allTrainers = [...trainers];
    trainers= trainers.slice(0,showLimit);
    const productsCount = allTrainers.length;
    

    const clickHandler = (arr, checkArr) => {
        arr = [...checkArr];
        if (showLimit < arr.length) {
            setShowLimit(showLimit + 8)
            arr = arr.slice(0, showLimit + 8)
            if (showLimit + 8 > arr.length) {
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
                            {trainers.map(product => <ProductsGridCard key={product.objectId} product={product} />)}
                        </section>
                        <ProductsCount count={productsCount} limit={showLimit} arrLength={allTrainers.length} />
                        <button className='grid__button' disabled={isDisabled} onClick={((e) => clickHandler(trainers, allTrainers))}>load more</button>
                    </>
                    : <NotAvailable />
            }

        </section>
    )
}

export default Trainers;    