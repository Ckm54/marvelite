import React from 'react'
import Comics from '../Comics'
import Image from 'next/image'
import Link from 'next/link'

function CreatorPage({ creatorData, comicData }) {
  const creator = creatorData.data.results[0]
  
  const comics = comicData.data.results

  return (
    <>
      <h2 className='text-titleRed font-semibold text-2xl pl-4 mt-3 md:ml-10'>Creator:</h2>
      <div className='md:grid grid-cols-8 mt-6'>
        <div className='col-start-2 col-span-2'>
          <Image src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt='captain' objectFit='fill' width='300px' height='300px' layout='responsive'/>
        </div>
        <div className='flex flex-col justify-between col-start-4 col-span-4 bg-white pt-6'>
          <div className='px-6'>
            <h2 className='font-bold text-2xl'>{creator.fullName}</h2>
            <p className='mt-5 text-lg text-titleRed font-medium'>
              Comics:
              <br />
              {creator.comics.items.map((comic, index) => 
              index < 10 && (
                <Link key={comic.name} href={{
                  pathname: '/comicdetail',
                  query: (comic.resourceURI.split('/').pop())
                  }} as={`/comic/${(comic.resourceURI.split('/').pop())}`}>
                <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>{comic.name}{index < 10 ? "," : ""}</span>
              </Link>
              ))}
            </p>
            <p className='mt-4 text-gray-500'>Comics: {creator.comics.available} | Events: {creator.events.available} | Series: {creator.series.available} | Stories: {creator.stories.available}</p>
          </div>
          <p className='bg-gray-200 pl-4 py-2 text-titleRed text-xl'>{creatorData.attributionText}</p>
        </div>
      </div>
      <Comics characterComics={comics} attribution={creatorData.attributionText}/>
    </>
  )
}

export default CreatorPage