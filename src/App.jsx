import { ProductsDataProvider } from './context/ProductsDataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import './App.scss';

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
