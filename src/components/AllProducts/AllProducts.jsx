import { useContext } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import ProductsGridCard from '../ProductsGridCard/ProductsGridCard';
import '../../products-styles/ProductsGridZoneStyles.scss';

const AllProducts = () => {

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
    
    const allProducts = products;
   
    return (
        <section className='grid__wrapper'>
            <section className='grid'>
                {allProducts.map(product =>  <ProductsGridCard key={product.objectId} product={product} info={informationCutter(product.description)}/>)}
            </section>
            <button className='grid__button'>load more</button>
        </section>
    )
}

export default AllProducts;