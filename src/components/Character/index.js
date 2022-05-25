import Image from 'next/image'
import React from 'react'
import Comics from '../Comics'
import Link from 'next/link'

function Info({ character, characterComics }) {
  const heroInfo = character.data.results[0]
  
  return (
    <div>
      <h2 className='text-titleRed font-semibold text-2xl pl-4 mt-3 md:ml-10'>SuperHero:</h2>
      <div className='md:grid grid-cols-8 mt-6'>
        <div className='col-start-2 col-span-2'>
          <Image src={`${heroInfo.thumbnail.path}.${heroInfo.thumbnail.extension}`} alt='captain' objectFit='fill' width='300px' height='300px' layout='responsive'/>
        </div>
        <div className='flex flex-col justify-between col-start-4 col-span-4 bg-white pt-6'>
          <div className='px-8'>
            <h2 className='font-bold text-2xl mb-5'>{heroInfo.name}</h2>
            <p className='text-justify'>
            {heroInfo.description ? heroInfo.description : "Sorry, Descriptive Info Not Provided by the API"}
            </p>
            <p className='mt-4 text-gray-500'>Comics: {heroInfo.comics.available} | Events: {heroInfo.events.available} | Stories: {heroInfo.stories.available}</p>
            <p className='mt-4 text-lg text-titleRed font-medium'>Comics:</p>
            <p className='text-titleRed text-justify'>
              <Link href='/comicdetail'>
                <span className='pl-4 font-normal italic'>{
                  heroInfo.comics.items.map((comic) => <span key={comic.name} className="mr-5 hover:cursor-pointer hover:text-red-600">{comic.name} ,</span>)
                }</span>
              </Link>
            </p>
          </div>
          <p className='bg-gray-200 pl-4 py-2 text-titleRed text-xl'>{character.attributionText}</p>
        </div>
      </div>
      <Comics characterComics={characterComics}/>
    </div>
  )
}

export default Info