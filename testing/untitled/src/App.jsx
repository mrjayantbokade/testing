import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearchTerm && matchesCategory;
    });

    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div className="App p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <header className="w-full max-w-4xl mb-6">
                <h1 className="text-3xl font-bold text-center mb-4">Product Listing</h1>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </div>
            </header>
            <main className="w-full max-w-4xl shadow-2xl">
                <ProductList products={filteredProducts} />
            </main>
        </div>
    );
};

export default App;