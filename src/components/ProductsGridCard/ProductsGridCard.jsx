import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {successNotification} from '../../services/notificationServices';
import '../ProductsGridCard/ProductsGridCard.scss';

const ProductsGridCard = ({ product }) => {

    const {loadProduct} = useContext(CartContext);

    const addButtonClickHandler = (product) => {
        loadProduct(product);
        successNotification(`Item ${product.objectId} added!`);
    }

    const starsCount = product.stars;
    const stars = [];
    const emptyStars = [];
    const discountedPrice = Number(product.price) * 0.85;
    for (let i = 0; i < starsCount; i++) {
        stars.push(i);
    };

    if(stars.length < 5) {
        const j = 5 - stars.length;
        for (let i = 0; i < j; i++) {
            emptyStars.push(i);
        }
    };

    const PriceTemplate = () => {
        return (
            <p className='card__content__price'>
                ${product.price.toFixed(2)}
            </p>
        )
    };

    const DiscountedPriceTemplate = () => {
        return (
            <p className='card__content__price'>
                <span className='card__content__price__old'>
                    ${product.price.toFixed(2)}
                </span>
                <span className='card__content__price__new'>
                   Now ${discountedPrice.toFixed(2)}
                </span>
            </p>
        )
    };

    const Stars = () => {
        return (
            <p>
                {stars.map(el =><i key={Math.random()} className="fa-solid fa-star"></i> )}
                {emptyStars.map(el =><i key={Math.random()} className="fa-regular fa-star"></i> )}
            </p>
        )
    };

    const informationCutter = (str) => {
        let result = '';
        if (str.length > 30) {
            result = str.substring(0, 35) + '...';
        } else {
            result = str;
        }
        return result;
    }


    return (
        <article className='card'>
            <div className='card__image__wrapper'>
                <img src={product.image} alt="" />
            </div>
            <div className='card__content__wrapper'>
                <h3 className='card__content__title'>{product.name}</h3>
                <p className='card__content__info'>{informationCutter(product.description)}</p>
                {
                    !product.discount
                        ?<PriceTemplate/>
                        : <DiscountedPriceTemplate/>
                }
                {
                    <Stars/>
                }
            </div>
            <div className='card__buttons__wrapper'>
                <button className='details'>details</button>
                <button className='add' onClick={(e)=>{addButtonClickHandler(product)}} >add to cart</button>
            </div>
        </article>
    )
}

export default ProductsGridCard;