import React from 'react';

function Home() {
  return (
    <div className='text-blue-450 px-10 py-5 mb-11'>

      <select className="mb-4">
        <option>most recent</option>
        <option>Recommended</option>
        <option>popular</option>
        <option>price low to high</option>
        <option>price high to low</option>
        <option>sales</option>
      </select>

      <select className="mb-4">
        <option>most recent</option>
      </select>

      <select>
        <option>most recent</option>
      </select>

    </div>
  );
}

export default Home;
