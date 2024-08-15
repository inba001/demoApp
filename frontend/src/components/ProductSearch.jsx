import React, { useState } from 'react';

const ProductSearch = ({ products = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-3">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for products"
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredProducts.length > 0 ? (
                <ul className="list-group">
                    {filteredProducts.map(product => (
                        <li key={product.id} className="list-group-item">
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="alert alert-warning" role="alert">
                    No products found!
                </div>
            )}
        </div>
    );
};

export default ProductSearch;
