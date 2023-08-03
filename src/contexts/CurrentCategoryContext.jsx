import { createContext, useState } from "react";

export const CurrentCategoryContext = createContext();

export const CurrentCategoryProvider = ({ children }) => {
    const [currentCategory, setCurrentCategory] = useState('All products');
 
    const categorySetter = (data) => {
        setCurrentCategory(data);
    }

    return (
        <CurrentCategoryContext.Provider value={{currentCategory, categorySetter}}>
            {children}
        </CurrentCategoryContext.Provider>
    );
}