import { useContext, useEffect } from 'react';
import { CurrentCategoryContext } from '../../contexts/CurrentCategoryContext';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import '../Header/Header.scss';

const Header = () => {

    const { categorySetter } = useContext(CurrentCategoryContext);
    const { cart } = useContext(CartContext);
    useEffect(()=>{

    },[cart])

    const count = cart.length;

    return (
        <div className='header-wrapper'>
            <header className='header'>
                <Logo />
                <nav className='header__navigation'>
                    <ul className='header__navigation__list'>
                        <li className='header__navigation__list__item'>
                            <Link to={'/'} onClick={(e) => categorySetter('All products')}>all products</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/trainers'} onClick={(e) => categorySetter('Trainers')}>trainers</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/t-shirts'} onClick={(e) => categorySetter('T-Shirts')}>t-shirts</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/pants'} onClick={(e) => categorySetter('Pants')}>pants</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/cart'}><i className="fa-solid fa-cart-shopping   header__navigation__list__item__cart"><span className='header__cart__count'>{count}</span></i></Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;