import '../ProductsCount/ProductsCount.scss';

const ProductsCount = ({ count, limit, arrLength }) => {
    return (
        <article className='counter'>
            <p >
                1 &#8212;
                {
                    arrLength >= limit
                        ? <>
                             {` ${limit} `}
                        </>
                        : <>
                            {` ${arrLength} `}
                        </>
                }
                of {count}</p>
        </article>
    )
}

export default ProductsCount;