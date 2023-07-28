import { useContext } from 'react';
import { ProductsDataContext } from '../context/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import '../ProductsGrid/ProductsGrid.scss';

const ProductsGrid = () => {

    const {products} = useContext(ProductsDataContext);
    const informationCutter = (str) => {
        let result = '';
        if(str.length > 30 ){
            result = str.substring(0,35) + '...';
        }else{
            result = str;
        }
        return result;
    }


    return (
        <section className='grid__wrapper'>
            <section className='grid'>
                {products.map(product =>  <ProductsGridCard key={product.objectId} product={product} info={informationCutter(product.description)}/>)}
            </section>
            <button className='grid__button'>load more</button>
        </section>
    )
}

export default ProductsGrid;