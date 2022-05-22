import React from 'react'

function Search() {
  return (
    <form className='mt-3 md:mt-0'>
      <input className="nd:font-semibold md:text-lg text-white border-b-4 border-titleRed md:px-2 md:mr-3 focus:outline-none bg-transparent placeholder-gray-500 focus:border-red-600" placeholder='Input superhero name' type='text' />
      <button className='md:text-2xl bg-titleRed font-semibold text-white px-4 py-1 rounded hover:bg-red-600'>Search</button>
    </form>
  )
}

export default Search