import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isDiscount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}
        {product.isBestSeller && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
          ₹{product.price}
            {product.originalPrice && (
              <span className="text-sm line-through text-gray-500 dark:text-gray-300 ml-2">
                ₹2{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
