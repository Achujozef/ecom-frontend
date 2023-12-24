import React, { useState, useEffect } from "react";
import useraxios from "../useraxios"; 
import Navbar from "../components/user/Navbar";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await useraxios.get('/api/products/');
        setProducts(response.data);

      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);
        console.log(products);
  return (
    <div className="flex flex-wrap justify-center">
      <Navbar />
      {products.map((product) => (
        <div key={product.id} className="m-4 max-w-xs">
          <div className="bg-white p-4 rounded-md shadow-md">
          <img
  src={product.images[0]?.image.url }
  alt={product.name}
  className="mb-2 w-full h-32 object-cover rounded-md"
/>



            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <p className="text-gray-600 mb-2">Available Quantity: {product.quantity}</p>
            {product.is_listed ? (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full">
                Available
              </span>
            ) : (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full">
                Not Available
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
