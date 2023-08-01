import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const setCatrContent = () => {

    }

    const categorySetter = (data) => {
        setCurrentCategory(data);
    }



    return (
        <CartContext.Provider value={{ cart, categorySetter,cartCount  }}>
            {children}
        </CartContext.Provider>
    );
}