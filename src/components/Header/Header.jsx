import { useContext, useEffect } from 'react';
import { CurrentCategoryContext } from '../../contexts/CurrentCategoryContext';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import '../Header/Header.scss';

const Header = () => {

    const { categorySetter } = useContext(CurrentCategoryContext);
    const { cart, openCart,closeCart } = useContext(CartContext);
    useEffect(() => {

    }, [cart]);

    const count = cart.length;

    const clickHandler = (str) => {
        categorySetter(str);
        closeCart();
    } 

    return (
        <div className='header-wrapper'>
            <header className='header'>
                <Logo />
                <nav className='header__navigation'>
                    <ul className='header__navigation__list'>
                        <li className='header__navigation__list__item'>
                            <Link to={'/'} onClick={(e) => clickHandler('All products')}>all products</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/trainers'} onClick={(e) => clickHandler('Trainers')}>trainers</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/t-shirts'} onClick={(e) => clickHandler('T-Shirts')}>t-shirts</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link to={'/pants'} onClick={(e) => clickHandler('Pants')}>pants</Link>
                        </li>
                        <li className='header__navigation__list__item'>
                            <Link onClick={(e)=>{openCart()}} to={'#'}><i className="fa-solid fa-cart-shopping  header__navigation__list__item__cart"><span className='header__cart__count' >{count}</span></i></Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;