import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Logo from '../common/Logo/Logo';
import CartCard from '../CartCard/CartCard';
import { happyNotification } from '../../services/notificationServices';
import '../Cart/Cart.scss';

const Cart = () => {

    const { cart, open, closeCart, emptyCart } = useContext(CartContext);
    const totalPrice = (cart.reduce((acc, currentProduct) => currentProduct.discount ? acc + currentProduct.price * 0.85 : acc + currentProduct.price, 0)).toFixed(2);
    if (!open) {
        return null
    }

    const hasProducts = !!cart.length > 0;

    const sendOrderHandler = () => {
        emptyCart();
        happyNotification('Your order was sent!');
    }

    return (
        <section className='cart__wrapper' >
            <section className='cart'>
                <div className='cart__icon__wrapper'>
                    <i onClick={(e) => { closeCart() }} className="fa-regular fa-circle-xmark cart__icon"></i>
                </div>
                <h2 className='cart__title'>my cart</h2>
                <div className='cart__content'>
                    {
                        hasProducts
                            ? <>
                                {cart.map((product) => <CartCard key={`${product.objectId}${Math.random()}`} product={product} />)}
                            </>
                            : <div className='empty__cart'>
                                <h1>Your cart is empry ...  Lets start shopping !</h1>
                                <Logo />
                            </div>
                    }
                </div>
                {
                    hasProducts
                        ?
                        <>
                            <h2 className='cart__card__total__price'>Total: ${totalPrice}</h2>
                            <button className='cart__card__send__button' onClick={(e) => { sendOrderHandler() }}>Send order</button>
                        </>
                        : null
                }
            </section>
        </section>
    );
}

export default Cart;