import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext.js"; //links the

const ProductCard = ({ product }) => {
  return (
    <a href={product.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-40 group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
    </a>
  );
};

export const Feed = () => {
  //returns the functions from globalContext.js
  const { getProducts, productsList } = useGlobalContext();
  // console.log(productsList);
  const products = productsList;

  return (
    <div className="bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div class="w-full md:w-3/4 ">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            class="placeholder-italic placeholder-text-slate-400 block w-6/12 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto mt-8"
            placeholder="Search for product"
            type="text"
            name="search"
          />
        </label>
      </div>

      {/* Right Section for Ads */}
      <div className="w-full md:w-1/4 bg-gray-200">
        {/* Your ad content goes here */}
        <div className="p-4">
          <h3 className="text-3xl font-extrabold text-gray-900 pb-4">
            Flash deals!
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Ad content */}
            {products.map((product) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
