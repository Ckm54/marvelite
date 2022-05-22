import React from 'react'

function Search() {
  return (
    <form>
      <input className="font-semibold text-lg text-white text-lg border-b-4 border-titleRed px-2 mr-3 focus:outline-none bg-transparent placeholder-gray-500" placeholder='Input superhero name' type='text' />
      <button className='text-2xl bg-titleRed font-semibold text-white px-4 py-1 rounded hover:bg-red-600'>Search</button>
    </form>
  )
}

export default Search