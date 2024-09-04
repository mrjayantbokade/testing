import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-rows-1 ">
            {products.map(product => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div
                        className="flex justify-center items-center"
                        style={{ height: '256px', width: '256px' }} // 1:1 aspect ratio for the image container
                    >
                        <img
                            className="object-cover"
                            style={{ height: '100%', width: '100%' }}
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                        <p className="text-sm text-gray-600 mt-2 break-words">
                            {product.description.length > 100
                                ? `${product.description.substring(0, 100)}...`
                                : product.description}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-800">
                                ${product.price}
                            </span>
                            <span className="text-sm text-gray-600">
                                Rating: {product.rating.rate} ⭐
                            </span>
                        </div>
                        <div className="mt-2">
                            <span
                                className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-2 py-1">
                                {product.category}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
