import React from 'react';

const ProductCard = ({ product }) => {
  // Conditional Rendering for Buttons
  const renderButton = () => {
    if (product.status === "Available") {
      return (
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      );
    } else {
      return (
        <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed" disabled>
          Out of Stock
        </button>
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      
      {/* Product Image & Status Badge */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {/* Conditional Badge for Stock Status */}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
          product.status === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {product.status}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">{product.category}</span>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
          <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
        </div>

        <div className="mt-auto">
          <p className="text-xl font-bold text-gray-900 mb-3">Rs. {product.price.toLocaleString()}</p>
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;