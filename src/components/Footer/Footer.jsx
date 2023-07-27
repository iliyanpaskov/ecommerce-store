import { Link } from 'react-router-dom';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <section className='footer__content'>
                <ul className='footer__content__list'>
                    <li className='footer__content__list__item'>
                        <Link to={'#'}>services</Link>
                    </li>
                    <li className='footer__content__list__item'>
                        <Link to={'#'}>delivery</Link>
                    </li>
                    <li className='footer__content__list__item'>
                        <Link to={'#'}>privacy policy</Link>
                    </li>
                    <li className='footer__content__list__item'>
                        <Link to={'#'}>contacts</Link>
                    </li>
                </ul>
                <p>Copyright &copy;2023. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer;