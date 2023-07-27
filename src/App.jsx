import { ProductsDataProvider } from './components/context/ProductsDataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import Products from './components/Products/Products';

function App() {

    return (
        <ProductsDataProvider>
            <div className='app'>
                <Header />
                <Products />
                <Footer />

            </div>
        </ProductsDataProvider>
    )
}

export default App;
