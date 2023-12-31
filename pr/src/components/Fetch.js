import React, { useEffect, useState } from 'react';
import GetProduct from './GetProduct';
import Search from './Search';

function Fetch() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchItem) => {
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredItems(filteredData);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const productsToRender = filteredItems.length > 0 ? filteredItems : products;

  const productList = productsToRender.map((product) => (
    <div key={product.id} className='w-1/3 p-4'>
      <GetProduct
        title={product.title}
        price={product.price}
        description={product.description}
        image={product.images[0]}
      />
    </div>
  ));

  return (
    <div className='flex flex-wrap justify-center'>
      <Search onsearch={handleSearch} />
      {productList}
    </div>
  );
}

export default Fetch;
