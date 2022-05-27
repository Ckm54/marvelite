import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ComicDetail({ comicData }) {

  const comic = comicData.data.results[0]

  return (
    <div className='md:flex flex-col md:mx-auto md:px-10'>
      <h2 className='text-titleRed font-semibold text-3xl mt-3 '>{comic.title}</h2>
      <div className='md:grid grid-cols-8 mt-6'>
        <div className='col-start-2 col-span-2'>
          <Image priority src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='captain' objectFit='fill' width='300px' height='300px' layout='responsive'/>
        </div>
        <div className='col-start-4 flex flex-col justify-between col-span-4 bg-white'>
          <div className='p-10'>
            <h2 className='font-bold text-2xl mb-4'>Format: <span>{comic.format}</span></h2>
            {comic.description ? <p className='text-justify text-lg tracking-wide' dangerouslySetInnerHTML={{
              __html: `${comic.description}`
            }} style={{whiteSpace: "pre-line"}}>
            </p> : <p className='text-justify text-lg tracking-wide'>No description provided by API</p>}
            <p className='mt-8 text-lg text-titleRed font-medium'>
              Characters:
              <br />
              {comic.characters.items.map((character) => {
                return (
                  <Link key={character.resourceURI} href={{
                    pathname: '/character',
                    query: (character.resourceURI.split('/').pop())
                  }} as={`/character/${(character.resourceURI.split('/').pop())}`}>
                    <span className='md:pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>{character.name},</span>
                  </Link>
                )
              })}
            </p>
            <p className='mt-8 text-lg text-titleRed font-medium'>
              Creators:
              <br />
              {comic.creators.items.map((creator) => {
                return (
                  <Link key={creator.resourceURI} href={{
                    pathname: '/creator',
                    query: (creator.resourceURI.split('/').pop())
                  }} as={`/creator/${(creator.resourceURI.split('/').pop())}`}>
                    <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>{creator.name},</span>
                  </Link>
                )
              })}
            </p>
          </div>
          <p className='bg-gray-200 pl-4 py-2 text-titleRed text-xl'>{comicData.attributionText}</p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail