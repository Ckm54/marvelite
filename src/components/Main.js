import React from 'react'
import Search from './Search'
import Thumbnails from './Thumbnails'

function Main({characters}) {
  return (
    <div>
      <div className='flex flex-col justify-between mx-10 mt-4 md:flex-row'>
        <h2 className='text-xl text-titleRed font-semibold md:text-2xl'>Common Superheroes</h2>
        <Search />
      </div>
      <Thumbnails heroes={characters}/>
    </div>
  )
}

export default Main