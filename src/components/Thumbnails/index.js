import React from 'react'
import Image from "next/image"
import Link from 'next/link'

function Thumbnails({heroes}) {
  // const superheroData = heroes.characters.results
  console.log(heroes)
  return (
    <div className='md:max-w-8xl md:px-5 mx-auto container md:grid gap-4 grid-cols-4 mt-6'>
      {heroes.map((hero) => (
        <Link href='/character' key={hero.id}>
          <div className='mx-auto md:mx-0 bg-white max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='scale-100 hover:scale-105 ease-in duration-200 hover:cursor-pointer'>
              <Image src={`${hero.image.url}`} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
            </div>
            <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>{hero.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Thumbnails