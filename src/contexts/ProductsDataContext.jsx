import { createContext, useState } from "react";

export const ProductsDataContext = createContext();

export const ProductsDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [isAvailable, setIsAvailable] = useState(true)

    const setProductsData = (data) => {
        setProducts(data);
    }

    const setAllProductsData = (data) => {
        setAllProducts([...data]);
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
        } else if (sortParam === 'high') {
            console.log(products);
            data = [...products].sort((a, b) => {
                return Number(b.price) - Number(a.price);
            });
        }
        setProducts(data);
    }

    const filterData = (brand, gender, color) => {
        let data = [...allProducts];
        if (brand === 'adidas') {
            data = data.filter((el) => el.brand.toLowerCase() === 'adidas');
        } else if (brand === 'nike') {
            data = data.filter((el) => el.brand.toLowerCase() === 'nike');
        } else if (brand === 'under armour') {
            data = data.filter((el) => el.brand.toLowerCase() === 'under armour');
        } else {
            brand === 'all brands';
        }

        if (gender === 'men') {
            data = data.filter((el) => el.gender.toLowerCase() === 'men');
        } else if (gender === 'women') {
            data = data.filter((el) => el.gender.toLowerCase() === 'women');
        } else if (gender === 'kids') {
            data = data.filter((el) => el.gender.toLowerCase() === 'kids');
        } else {
            gender === 'all genders';
        }

        if (color === 'black') {
            data = data.filter((el) => el.color.toLowerCase() === 'black');
        } else if (color === 'white') {
            data = data.filter((el) => el.color.toLowerCase() === 'white');
        } else if (color === 'blue') {
            data = data.filter((el) => el.color.toLowerCase() === 'blue');
        } else if (color === 'red') {
            data = data.filter((el) => el.color.toLowerCase() === 'red');
        } else if (color === 'green') {
            data = data.filter((el) => el.color.toLowerCase() === 'green');
        } else if (color === 'other') {
            data = data.filter((el) => el.color.toLowerCase() === 'other');
        } else {
            color === 'all colors';
        }

        setProducts([...data]);
    }

    return (
        <ProductsDataContext.Provider value={{ products, setProductsData, allProducts, setAllProductsData, sortData, filterData }}>
            {children}
        </ProductsDataContext.Provider>
    )
}