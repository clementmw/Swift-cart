import React, { useState } from 'react'

function Search({onsearch}) {
  const [search, setSearch] = useState('')

  const handleChange = (e)=>{
    setSearch(e.target.value)
    onsearch(search)
  
  }
  return (
    <div className='searchbar'>
      <div className='mb-8'>
        <label className='block text-blue-500 text-sm font-bold mb-2' htmlFor='password'>
        search
        <input
         id = 'search' 
         type = 'text' 
         name = 'text' 
         placeholder=' search product' 
         value={search} 
         onChange={handleChange}
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         /> 
        </label>
        </div>

    
    </div>
  )
}

export default Search