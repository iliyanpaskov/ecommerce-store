import { useContext } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import NotAvailable from '../common/NotAvailable/NotAvailable';
import '../../products-styles/ProductsGridZoneStyles.scss';

const TShirts = () => {

    const { products ,isAvailable} = useContext(ProductsDataContext);
    const informationCutter = (str) => {
        let result = '';
        if (str.length > 30) {
            result = str.substring(0, 35) + '...';
        } else {
            result = str;
        }
        return result;
    }
    const tshirts = products.filter(product => product.type === 'tshirts');

    return (
        <section className='grid__wrapper'>
            {
                isAvailable
                    ? <>
                        <section className='grid'>
                            {tshirts.map(product => <ProductsGridCard key={product.objectId} product={product} info={informationCutter(product.description)} />)}
                        </section>
                        <button className='grid__button'>load more</button>
                    </>
                    : <NotAvailable />
            }

        </section>
    )
}

export default TShirts;    