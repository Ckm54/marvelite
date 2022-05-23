import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from 'next/link'
import Loader from '../Loader'

function Thumbnails({characters}) {
  const[loading, setLoading] = useState(false)
  console.log(characters)
  const[heroes, setHeroes] = useState([])
  useEffect(() => {
    setHeroes(characters.data.results)
  }, [characters])


  console.log(loading)
  return (
    <div className='md:max-w-8xl md:px-5 mx-auto container md:grid gap-4 grid-cols-4 mt-6'>
      {heroes.map((hero) => loading ? <Loader /> : <Link href='/character' key={hero.id}>
          <div className='mx-auto md:mx-0 bg-white max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='scale-100 hover:scale-105 ease-in duration-200 hover:cursor-pointer'>
              <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
            </div>
            <h4 className='px-4 py-3 text-lg font-semibold text-xl'>{hero.name}</h4>
            <p className='px-4 py-2 bg-gray-300'>{characters.attributionText}</p>
          </div>
        </Link>)}
    </div>
  )
}

export default Thumbnails