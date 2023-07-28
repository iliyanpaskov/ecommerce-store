import '../Filter/Filter.scss';

const Filter = () => {
    return (
        <aside className='filter'>
            <form className='filter__form'>
                <input type="checkbox" id='d' />
                <label htmlFor="d">Something</label>
                <input type="checkbox" id='g' />
                <label htmlFor="g">Somethingsssssssss</label>
                <input type="checkbox" id='f' />
                <label htmlFor="f">Something</label>
                <input type="checkbox" id='h' />
                <label htmlFor="h">Something</label>
                <input type="checkbox" id='j' />
                <label htmlFor="j">Something</label>
                <input type="checkbox" id='y' />
                <label htmlFor="y">Something</label>
            </form>
        </aside>
    );
}

export default Filter;