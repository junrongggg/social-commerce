import React from 'react';
import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext.js"; //links the 

const ProductCard = ({ product }) => {
  return (
    <a href={product.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
    </a>
  );
};

/** Disqus Commenting Plugin */
const Disqus = () => {
	(function() { // DON'T EDIT BELOW THIS LINE
		var d = document, s = d.createElement('script');
		s.src = 'https://http-localhost-3000-biz0qrhp9v.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	})();
}

export const Feed = () => {

	//returns the functions from globalContext.js
	const { getProducts, productsList, getComments, comments } = useGlobalContext();
	// console.log(productsList);
	// console.log(comments);
	const products = productsList;

	return (
		<div className="bg-white flex flex-col md:flex-row">
			{/* Left Section */}
			<div className="w-full md:w-3/4">
				<div className="mx-auto max-w-7xl py-20 px-20 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold text-gray-900">Products</h2>
					<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
					<div id="disqus_thread" className="mt-10 grid grid-cols-1">
						<Disqus></Disqus>
					</div>
				</div>
			</div>

			{/* Right Section for Ads */}
			<div className="w-full md:w-1/4 bg-gray-200">
				{/* Your ad content goes here */}
				<div className="p-4">
					<h3 className="text-xl font-semibold">Advertisement</h3>
					<div className="mt-10 grid grid-cols-1">
						{comments.map((comments) => (
							<p key={comments._id} product={comments}>
								{comments.username}
								{comments.comments}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};