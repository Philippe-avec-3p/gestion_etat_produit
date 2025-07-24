import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductView from './components/ProductView';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentRoute, setCurrentRoute] = useState({ page: 'list', params: {} });

    const navigate = (page, params = {}) => {
        setCurrentRoute({ page, params });
    };

    const renderPage = () => {
        switch (currentRoute.page) {
            case 'list':
                return <ProductList navigate={navigate} />;
            case 'add':
                return <ProductForm navigate={navigate} />;
            case 'view':
                return <ProductView navigate={navigate} productId={currentRoute.params.id} />;
            case 'edit':
                return <ProductForm navigate={navigate} isEdit={true} productId={currentRoute.params.id} />;
            default:
                return <ProductList navigate={navigate} />;
        }
    };

    return (
        <div>
            <Navbar navigate={navigate} currentRoute={currentRoute} />
            <div className="container py-4">
                {renderPage()}
            </div>
        </div>
    );
}

export default App;