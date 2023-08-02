import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);


    const loadProduct = (product) => {
        setCart([...cart, product]);
    }

    const removeProduct = (id) => {
        setCart(cart.filter((el) => el.objectId !== id))
    }

    const openCart = () => {
        setOpen(true);
    }

    const closeCart = () => {
        setOpen(false);
    }


    return (
        <CartContext.Provider value={{ cart, loadProduct,removeProduct, openCart, closeCart, open }}>
            {children}
        </CartContext.Provider>
    );
}