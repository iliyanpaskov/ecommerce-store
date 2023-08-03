import { useContext } from "react";
import { CurrentCategoryContext } from "../../contexts/CurrentCategoryContext";
import Sorter from "../Sorter/Sorter";
import '../Category/Category.scss'

const Category = () => {
    const { currentCategory } = useContext(CurrentCategoryContext);

    return (
        <section id="category" className="category">
            <h2 className="category__title">{currentCategory}</h2>
            <article className="category__products">
                <Sorter />
            </article>
        </section>
    )
}

export default Category;