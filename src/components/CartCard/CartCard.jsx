import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {sadNotification} from '../../services/notificationServices';
import '../CartCard/CartCard.scss';

const CartCard = ({ product }) => {
    const { removeProduct } = useContext(CartContext);

    const starsCount = product.stars;
    const stars = [];
    const emptyStars = [];
    const discountedPrice = Number(product.price) * 0.85;

    for (let i = 0; i < starsCount; i++) {
        stars.push(i);
    };
    if (stars.length < 5) {
        const j = 5 - stars.length;
        for (let i = 0; i < j; i++) {
            emptyStars.push(i);
        }
    };

    const Stars = () => {
        return (
            <p className='cart__card__content__stars'>
                {stars.map(el => <i key={Math.random()} className="fa-solid fa-star"></i>)}
                {emptyStars.map(el => <i key={Math.random()} className="fa-regular fa-star"></i>)}
            </p>
        )
    };

    const PriceTemplate = () => {
        return (
            <p className='cart__card__content__price'>
                ${product.price.toFixed(2)}
            </p>
        )
    };

    const DiscountedPriceTemplate = () => {
        return (
            <div className='cart__card__content__price'>
                <span className='cart__card__content__price__old'>
                    ${product.price.toFixed(2)}
                </span>
                <span className='cart__card__content__price__new'>
                    Only for ${discountedPrice.toFixed(2)}
                </span>
            </div>
        )
    };

    const removeHandler = (id) => {
        removeProduct(id);
        sadNotification(`Item ${id} removed!`)
    };

    return (
        <article className='cart__card'>
            <div className='cart__card__image__wrapper'>
                <img src={product.image} alt="" />
            </div>
            <div className='cart__card__content'>
                <h1 className='cart__card__content__brand'>{product.brand}</h1>
                <h2 className='cart__card__content__name'>{product.name}</h2>
                <Stars />
                <div>
                    {
                        product.discount
                            ? <DiscountedPriceTemplate />
                            : <PriceTemplate />
                    }
                </div>
            </div>
            <button onClick={(e) => {removeHandler(e.currentTarget.value) }} value={product.objectId} className='cart__card__remove__button'><img src="/images/cart-remove.png" alt="" /></button>
        </article>
    )
}

export default CartCard;