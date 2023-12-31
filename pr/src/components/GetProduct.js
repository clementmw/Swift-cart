import React, { useState } from 'react';

function GetProduct({ title, price, description, image, altText }) {
  const [inCart, setInCart] = useState(false);

  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt={altText || 'Product Image'}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
            Title: {title}
          </div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Description:
          </div>
          <p className="mt-2 text-gray-500">{description}</p>

          <div className="mt-4">
            <span className="text-gray-500">Price: ${price}</span>
          </div>

          <button
            className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${
              inCart ? 'bg-red-500' : 'bg-green-500'
            }`}
            onClick={handleToggleCart}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetProduct;
