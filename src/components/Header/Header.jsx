import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import '../Header/Header.scss';
import { useContext } from 'react';
import { CurrentCategoryContext } from '../../contexts/CurrentCategoryContext';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {

    const { categorySetter } = useContext(CurrentCategoryContext);
    const { cartCount } = useContext(CartContext);

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
                            <Link to={'/t-shirts'}>t-shirts</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/pants'}>pants</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/cart'}><i className="fa-solid fa-cart-shopping fa-flip-horizontal  header__navigation__list__item__cart"><span className='header__cart__count'>{cartCount}</span></i></Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;