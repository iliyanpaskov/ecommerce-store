import '../ProductsCount/ProductsCount.scss';

const ProductsCount = ({count}) => {
    return (
        <article className='counter'>
            <p >{count}</p>
        </article>
    )
}

export default ProductsCount;