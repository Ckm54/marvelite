import React, { useState } from 'react'

function Search({ filterData }) {
  const [searchQuery, setSearchQuery] = useState('')
  function handleChange(e) {
    setSearchQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
   filterData(searchQuery)
   setSearchQuery('')
  }
  return (
    <form className='mt-3 md:mt-0' onSubmit={handleSubmit}>
      <input className="md:font-semibold md:text-lg border-b-4 border-titleRed md:px-2 md:mr-3 focus:outline-none bg-transparent placeholder-gray-500 focus:border-red-600" placeholder='Input superhero name' type='text' onChange={handleChange} value={searchQuery}/>
      <input type="submit" className='md:text-2xl bg-titleRed font-semibold text-white px-4 py-1 rounded hover:bg-red-600' value="Search"/>
    </form>
  )
}

export default Search