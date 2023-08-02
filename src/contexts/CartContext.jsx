import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const loadProduct = (product) => {
        setCart([...cart, product]);
        console.log(cart);
    }


    return (
        <CartContext.Provider value={{ cart, loadProduct }}>
            {children}
        </CartContext.Provider>
    );
}