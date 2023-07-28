import ProductsCount from "../ProductsCount/ProductsCount";
import Sorter from "../Sorter/Sorter";
import '../Category/Category.scss'

const Category = () => {
    return (
        <section className="category">
            <h2 className="category__title">All products</h2>
            <ProductsCount />
            <article className="category__products">
                <Sorter />

            </article>
        </section>
    )
}

export default Category;