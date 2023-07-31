import { ProductsDataProvider } from './contexts/ProductsDataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import './App.scss';
import { CurrentCategoryProvider } from './contexts/CurrentCategoryContext';

function App() {

    return (
        <ProductsDataProvider>
            <CurrentCategoryProvider>
                <div className='app'>
                    <Header />
                    <Products />
                    <Footer />
                </div>
            </CurrentCategoryProvider>
        </ProductsDataProvider>
    )
}

export default App;
