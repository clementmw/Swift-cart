import React, { useState } from 'react';

function Search({ onsearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    onsearch(search);
  };

  return (
    <div className="flex justify-end py-4">
      <div className="mb-4 mr-4">
        <input
          id="search"
          type="text"
          name="text"
          placeholder="Search product"
          value={search}
          onChange={handleChange}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}

export default Search;
