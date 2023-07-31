import ProductsCount from "../ProductsCount/ProductsCount";
import Sorter from "../Sorter/Sorter";
import '../Category/Category.scss'
import { useContext } from "react";
import { CurrentCategoryContext } from "../../contexts/CurrentCategoryContext";

const Category = () => {
const {currentCategory} = useContext(CurrentCategoryContext);

    return (
        <section className="category">
            <h2 className="category__title">{currentCategory}</h2>
            <ProductsCount />
            <article className="category__products">
                <Sorter />

            </article>
        </section>
    )
}

export default Category;