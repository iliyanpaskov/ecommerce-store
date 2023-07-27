import { createContext, useState } from "react";

export const ProductsDataContext = createContext();

export const ProductsDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const setProductsData = (data) => {
        setProducts(data);
    }

    return (
        <ProductsDataContext.Provider value={{ products, setProductsData }}>
            {children}
        </ProductsDataContext.Provider>
    )
}