import { useContext } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import '../../products-styles/ProductsGridZoneStyles.scss';
import NotAvailable from '../common/NotAvailable/NotAvailable';

const Trainers = () => {

    const { products } = useContext(ProductsDataContext);
    const informationCutter = (str) => {
        let result = '';
        if (str.length > 30) {
            result = str.substring(0, 35) + '...';
        } else {
            result = str;
        }
        return result;
    }
    const trainers = products.filter(product => product.type === 'trainers');

    return (
        <section className='grid__wrapper'>
            {
                trainers.length > 0
                    ? <>
                        <section className='grid'>
                            {trainers.map(product => <ProductsGridCard key={product.objectId} product={product} info={informationCutter(product.description)} />)}
                        </section>
                        <button className='grid__button'>load more</button>
                    </>
                    : <NotAvailable />
            }

        </section>
    )
}

export default Trainers;    