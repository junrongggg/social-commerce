import '../App.css';
import React, { useState } from 'react';
import StarRating from '../starRating';


export const ProductPage = () => {
  const [liked, setLiked] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  
  const toggleLike = () => {
    setLiked(!liked);
  };

  const addToWishlist = () => {
    // Implement this function to add the product to the wishlist.
  };

  const shareProduct = () => {
    // Implement this function to share the product.
  };

  return (
    <div className="flex p-4">
      <div className="w-2/3 p-4">
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"></img>
        </div>
        <h2 className="text-2xl font-semibold">Product Name</h2>
        <p className="text-gray-600">$99.99</p>
        <p className="my-4">Product description goes here...</p>
        <div className=""><StarRating/></div>
        <button
          onClick={toggleLike}
          className={`flex items-center space-x-2 ${
            liked ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
        <button
          onClick={addToWishlist}
          className="text-gray-500 hover:text-gray-700"
        >
          Add to Wishlist
        </button>
        <button onClick={shareProduct} className="text-gray-500 hover:text-gray-700">
          Share
        </button>
      </div>
      <div className="w-1/3 p-4">
        <h3 className="text-xl font-semibold mb-4">Product Discussion</h3>
        <div className="border p-2 h-96 overflow-y-auto">
          {/* Render discussion messages here */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
