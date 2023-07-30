import { useContext, useEffect, useState } from 'react';
import { ProductsDataContext } from '../../context/ProductsDataContext';
import '../Sorter/Sorter.scss';

const Sorter = () => {
    const [sortParam, setSortParam] = useState('');
    const {sortData} = useContext(ProductsDataContext);
    useEffect(()=> {
        sortData(sortParam);
    },[sortParam])

    return (
        <form className="sorter" onChange={(e)=>setSortParam(e.target.value)}>
            <label htmlFor="sorter">Sort by:</label>
            <select id="sorter" name="sorter">
                <option value="a-z">Alphabetical A-Z</option>
                <option value="z-a">Alphabetical Z-A</option>
                <option value="low">Low - High price &#8593;</option>
                <option value="high">High - Low price &#8595;</option>
            </select>
        </form>
    )
}

export default Sorter;