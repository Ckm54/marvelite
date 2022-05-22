import React from 'react'
import Search from './Search'
import Thumbnails from './Thumbnails'

function Main() {
  return (
    <div>
      <div className='flex justify-between mx-10 mt-4'>
        <h2 className='text-titleRed font-semibold text-2xl'>Common Superheroes</h2>
        <Search />
      </div>
      <Thumbnails />
    </div>
  )
}

export default Main