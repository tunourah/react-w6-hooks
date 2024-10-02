import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
    
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-2">${product.price}</p>
          <button className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400 transition">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
