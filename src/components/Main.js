import React, { useState, useEffect } from 'react'
import Search from './Search'
import Thumbnails from './Thumbnails'

function Main({characters}) {
  const[loading, setLoading] = useState(false)

  console.log(characters)
  const[heroes, setHeroes] = useState([])
  useEffect(() => {
    setHeroes(characters.data.results)
  }, [characters])

  function handleHeroSearch(searchTerm) {
    console.log("in the main component: ", searchTerm)
  }
  return (
    <div>
      <div className='flex flex-col justify-between mx-10 mt-4 md:flex-row'>
        <h2 className='text-xl text-titleRed font-semibold md:text-2xl'>Common Superheroes</h2>
        <Search filterData={handleHeroSearch}/>
      </div>
      <Thumbnails heroes={heroes} loading={loading} attribution={characters.attributionText}/>
    </div>
  )
}

export default Main