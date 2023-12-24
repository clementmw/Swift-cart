import React from 'react'

function GetProduct({name,price,description,image}) {
  return (
    <div className="max-w-md mx-auto  bg-white rounded-xl overflow-hidden md:max-w-2xl ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src= {image}
            alt="product"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            description:

          </div>
          <p className="mt-2 text-gray-500">
            {description}
          </p>
         
          <div className="mt-4">
            <span className="text-gray-500">Price: ${price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetProduct