import '../Sorter/Sorter.scss';

const Sorter = () => {
    return (
        <form className="sorter">
            <label htmlFor="cars">Sort by:</label>
            <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </form>
    )
}

export default Sorter;