import { useContext, useEffect, useState } from 'react';
import { ProductsDataContext } from '../../contexts/ProductsDataContext';
import '../Filter/Filter.scss';

const Filter = () => {

    const [open, setOpen] = useState(false);
    const [brand, setBrand] = useState('all brands');
    const [gender, setGender] = useState('all genders');
    const [color, setColor] = useState('all colors');
    const { filterData } = useContext(ProductsDataContext);

    useEffect(() => {
        filterData(brand, gender, color);
    }, [brand, gender, color]);

    const brandFomrHandler = (e) => {
        setBrand(e.target.value);
    }
    const genderFomrHandler = (e) => {
        setGender(e.target.value);
    }
    const colorFomrHandler = (e) => {
        setColor(e.target.value);
    }


    return (
        <aside className={`filter ${open ? 'filter__open' : 'filter__close'}`}>
            <div className='filter__buttons__wrapper'>
                {
                    open
                        ? <i className="fa-solid fa-toggle-on" onClick={() => setOpen(!open)}></i>
                        : <i className="fa-solid fa-toggle-off" onClick={() => setOpen(!open)}></i>
                }
            </div>

            <form className='filter__form' onChange={(e) => brandFomrHandler(e)}>
                <h4 className='filter__form__title'>Brands:</h4>
                <div>

                    <div className='filter__form__option'>
                        <input type="radio" id='adidas' name='brand' value='adidas' />
                        <label htmlFor="adidas">Adidas</label>
                    </div>
                    <div className='filter__form__option'>
                        <input type="radio" id='nike' name='brand' value='nike' />
                        <label htmlFor="nike">Nike</label>
                    </div>
                    <div className='filter__form__option'>
                        <input type="radio" id='under armour' name='brand' value='under armour' />
                        <label htmlFor="under armour">Under Armour</label>
                    </div>
                    <div className='filter__form__option'>
                        <input type="radio" id='all brands' name='brand' value='all brands' />
                        <label htmlFor="all brands">See all</label>
                    </div>

                </div>
            </form >
            <form className='filter__form' onChange={(e) => genderFomrHandler(e)}>
                <h4 className='filter__form__title'>Gender:</h4>
                <div className='filter__form__option'>
                    <input type="radio" id='men' name='gender' value='men' />
                    <label htmlFor="men">Mens</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='women' name='gender' value='women' />
                    <label htmlFor="women">Womens</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='kids' name='gender' value='kids' />
                    <label htmlFor="kids">Kids</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='all genders' name='gender' value='all genders' />
                    <label htmlFor="all genders">See all</label>
                </div>
            </form >
            <form className='filter__form' onChange={(e) => colorFomrHandler(e)}>

                <h4 className='filter__form__title'>Colors:</h4>

                <div className='filter__form__option'>
                    <input type="radio" id='black' name='color' value='black' className=' black' />
                    <label htmlFor="black">Black</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='white' name='color' value='white' className=' white' />
                    <label htmlFor="white">White</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='red' name='color' value='red' className=' red' />
                    <label htmlFor="red">Red</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='blue' name='color' value='blue' className=' blue' />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='green' name='color' value='green' className=' green' />
                    <label htmlFor="green">Green</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='other' name='color' value='other' className=' other' />
                    <label htmlFor="other">Other</label>
                </div>
                <div className='filter__form__option'>
                    <input type="radio" id='all colors' name='color' value='all colors' className='' />
                    <label htmlFor="all colors">See all</label>
                </div>
            </form>
            <h4 className='filter__title'>filter</h4>
        </aside >
    );
}

export default Filter;