import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../Cart/Cart.scss';
import Logo from '../common/Logo/Logo';
import CartCard from '../CartCard/CartCard';

const Cart = () => {

    const { cart, open, closeCart } = useContext(CartContext);

    if (!open) {
        return null
    }



    return (
        <section className='cart__wrapper' >
            <section className='cart'>
                <div className='cart__icon__wrapper'>
                    <i onClick={(e) => { closeCart() }} className="fa-regular fa-circle-xmark cart__icon"></i>
                </div>
                <div className='cart__content'>
                    {
                        cart.length > 0
                            ? <>
                                {cart.map((product) => <CartCard key={`${product.objectId}${Math.random()}`} product={product}/>)}
                            </>
                            : <div className='empty__cart'>
                                <h1>You cart is empry lets start shopping !</h1>
                                <Logo />
                            </div>
                    }
                </div>
            </section>
        </section>
    );
}

export default Cart;