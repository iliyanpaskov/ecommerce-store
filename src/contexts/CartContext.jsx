import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const setCartContent = () => {

    }


    return (
        <CartContext.Provider value={{ cart,cartCount  }}>
            {children}
        </CartContext.Provider>
    );
}