import { createContext, useState } from "react";

export const ProductsDataContext = createContext();

export const ProductsDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');


    // const pants = products.filter(product => product.type === 'pants');
    // const tShirts = products.filter(product => product.type === 'tshirts');

    const setProductsData = (data) => {
        setProducts(data);
    }

    const sortData = (sortParam) => {
        let data = [];
        if (sortParam === 'a-z') {
            console.log(products);
            data = [...products].sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        } else if (sortParam === 'z-a') {
            console.log(products);
            data = [...products].sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1;
                } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        } else if (sortParam === 'low') {
            console.log(products);
            data = [...products].sort((a, b) => {
                return Number(a.price) - Number(b.price);
            });
        }else if (sortParam === 'high') {
            console.log(products);
            data = [...products].sort((a, b) => {
                return Number(b.price) - Number(a.price);
            });
        }

        setProducts(data);
    }

    return (
        <ProductsDataContext.Provider value={{ products, setProductsData, sortData }}>
            {children}
        </ProductsDataContext.Provider>
    )
}