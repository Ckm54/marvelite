import React, { useState, useEffect } from 'react'
import Search from './Search'
import Thumbnails from './Thumbnails'

import { ts, hash, PUBLIC_KEY } from "../../pages/api/hello"

function Main({characters}) {
  const[loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  console.log(characters)
  const[heroes, setHeroes] = useState([])
  useEffect(() => {
    setHeroes(characters.data.results)
  }, [characters])

  async function handleHeroSearch(searchTerm) {
    const searchResults = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&&nameStartsWith=${searchTerm}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash}`).then(res => res.json())
    console.log("in the main component: ", searchTerm)
    setHeroes(searchResults.data.results)
    setQuery(searchTerm)
  }
  return (
    <div>
      <div className='flex flex-col justify-between mx-10 mt-4 md:flex-row'>
        <h2 className='text-xl text-titleRed font-semibold md:text-2xl'>Common Superheroes {query ? `Search Results For ${query}...` : null}</h2>
        <Search filterData={handleHeroSearch}/>
      </div>
      <Thumbnails heroes={heroes} loading={loading} attribution={characters.attributionText} />
    </div>
  )
}

export default Main