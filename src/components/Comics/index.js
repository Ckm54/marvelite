import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Comics({ characterComics }) {
  return (
    <div>
      <h3 className='text-titleRed font-semibold text-2xl pl-4 mt-3 md:ml-10'>Comics:</h3>
      <p className='pl-4 md:ml-10 text-red-800 font-normal text-lg'>Only showing comics with a description...</p>
      <div className='max-w-10xl px-5 mx-auto container md:grid gap-2 grid-cols-3 mt-2'>
        {characterComics.map((comic) => {
          if(comic.description) {
            return (
              <div key={comic.id} className='max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-white scale-100 hover:scale-105 ease-in duration-200'>
              <div>
                <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
              </div>
              <div className='px-5 text-justify mb-7 pb-5'>
                <h4 className='py-3 text-lg'>{comic.title}</h4>
                <p>
                  {comic.description}
                </p>
                <Link href={{
                  pathname: '/comicdetail',
                  query: comic.id
                }} as={`/comic/${comic.id}`} key={comic.id}>
                  <p className='font-medium text-lg float-right py-6 text-titleRed hover:text-red-600 hover:cursor-pointer'>check it out</p>
                </Link>
              </div>
            </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Comics