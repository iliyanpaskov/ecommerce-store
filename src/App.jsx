import { ProductsDataProvider } from './contexts/ProductsDataContext';
import { CurrentCategoryProvider } from './contexts/CurrentCategoryContext';
import { CartContextProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { FilterProvider } from './contexts/FilterContext';

function App() {

    return (
        <ProductsDataProvider>
            <CurrentCategoryProvider>
                <CartContextProvider>
                    <FilterProvider>
                        <div className='app'>
                            <Header />
                            <Products />
                            <Footer />
                            <ToastContainer />
                        </div>
                    </FilterProvider>
                </CartContextProvider>
            </CurrentCategoryProvider>
        </ProductsDataProvider>
    )
}

export default App;
