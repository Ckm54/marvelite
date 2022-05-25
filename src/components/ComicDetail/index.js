import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ComicDetail({ comicData }) {

  // console.log("in comic details component: ", comicData)

  const comic = comicData.data.results[0]

  console.log(comic)
  return (
    <div className='flex flex-col mx-20 px-10'>
      <h2 className='text-titleRed font-semibold text-3xl mt-3 '>{comic.title}</h2>
      <div className='md:grid grid-cols-6 mt-6'>
        <div className='col-start-0 col-span-2'>
          <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='captain' objectFit='fill' width='300px' height='300px' layout='responsive'/>
        </div>
        <div className='col-start-3  col-span-4 p-10 bg-white'>
          <h2 className='font-bold text-2xl'>Format: <span>{comic.format}</span></h2>
          <p className='text-justify text-lg tracking-wide'>
          {comic.description}
          </p>
          <p className='mt-8 text-lg text-titleRed font-medium'>
            Characters:
            {comic.characters.items.map((character) => {
              return (
                <Link key={character.resourceURI} href={{
                  pathname: '/character',
                  query: (character.resourceURI.split('/').pop())
                }} as={`/character/${(character.resourceURI.split('/').pop())}`}>
                  <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>{character.name},</span>
                </Link>
              )
            })}
          </p>
          <p className='mt-8 text-lg text-titleRed font-medium'>
            Creators:
            {comic.creators.items.map((creator) => {
              return (
                <Link key={creator.resourceURI} href='/creator'>
                  <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>{creator.name},</span>
                </Link>
              )
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail