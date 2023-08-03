import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState(false);
 
    const showFilter = () => {
        console.log(filter);
        setFilter(!filter);
        
    }

    const hideFilter = () => {
        setFilter(false);
    }

    return (
        <FilterContext.Provider value={{ filter, showFilter,hideFilter }}>
            {children}
        </FilterContext.Provider>
    );
}