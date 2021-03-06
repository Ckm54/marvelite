import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import Loader from '../Loader'

function Thumbnails({ heroes, attribution }) {
  return (
    <div className='md:max-w-8xl md:px-5 mx-auto container md:grid gap-4 grid-cols-4 mt-6'>
      {heroes.map((hero) => <Link href={{
        pathname: '/character',
        query: hero.id
      }} as={`/character/${hero.id}`} key={hero.id}>
          <div className='flex flex-col justify-between scale-100 hover:scale-105 ease-in duration-200 hover:cursor-pointer mx-auto md:mx-0 bg-white mt-2 max-w-sm rounded overflow-hidden shadow-lg'>
            <div>
              <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
              <h4 className='px-4 py-3 text-lg font-semibold text-xl'>{hero.name}</h4>
            </div>
            <p className='px-4 py-2 bg-gray-300 text-titleRed'>{attribution}</p>
          </div>
        </Link>)}
    </div>
  )
}

export default Thumbnails