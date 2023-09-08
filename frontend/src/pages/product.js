import '../App.css';
import React, { useState, useEffect } from 'react';
import StarRating from '../starRating';

import { useGlobalContext } from "../context/globalContext.js"; //links the globalContext file
import { CommentForm } from "../components/addComments.js";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductPage = () => {
  const [liked, setLiked] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [discussion, setDiscussion] = useState([]);

  //returns the functions from globalContext.js
	const { getProducts, productsList, getComments, comments } = useGlobalContext();

  useEffect(() => {
    getComments();
  }, [comments]);
  
  const toggleLike = () => {
    setLiked(!liked);
  };

  const addToWishlist = () => {
    // Implement this function to add the product to the wishlist.
    toast("Item added to Wishlist!")
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
          
        <div className="w-max p-2 flex justify-end">
          <div className="flex items-center space-x-2">
            {/* Star Ratings */}
            <StarRating/>
            <button
              onClick={toggleLike}
              className={`flex items-end space-x-2 ${ liked ? 'text-red-500' : 'text-gray-500'}`}
            >
              {/* Heart Shape Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            {/* Share Icon */}
            <button onClick={shareProduct} className="flex items-end text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </button>
          </div>  
        </div>
        
        <div className="w-1/3 p-2">
				    <button onClick = {addToWishlist}>Add to Wishlist</button>
            <ToastContainer/>
        </div>
        <div className="w-1/3 p-2">
        </div>
        
      </div>
      
      <div className="w-1/3 p-4">
        <h3 className="text-xl font-semibold mb-4">Product Discussion</h3>
        <div className="border p-2 h-120 overflow-y-auto bg-gray-200">
          {/* Table for Discussion */}
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-2 py-1">Username</th>
                <th className="px-2 py-1">Comments</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment._id}>
                  <td className="border px-2 py-1">{comment.username}</td>
                  <td className="border px-2 py-1">{comment.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <CommentForm/>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
