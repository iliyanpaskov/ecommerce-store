import { useContext } from "react";
import { CurrentCategoryContext } from "../../contexts/CurrentCategoryContext";
import { FilterContext } from "../../contexts/FilterContext";
import Sorter from "../Sorter/Sorter";
import '../Category/Category.scss'

const Category = () => {
    const { currentCategory } = useContext(CurrentCategoryContext);
    const { filter, showFilter } = useContext(FilterContext);

    const showFilterHandler = () => {
        showFilter();
        console.log(55);
    }

    return (
        <section className="category">
            <i className="fa-solid fa-bars" onClick={() => { showFilterHandler() }}></i>
            <h2 className="category__title">{currentCategory}</h2>
            <article className="category__products">
                <Sorter />
            </article>
        </section>
    )
}

export default Category;