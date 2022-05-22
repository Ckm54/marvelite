import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ComicDetail() {
  return (
    <div className='flex flex-col mx-20 px-10'>
      <h2 className='text-titleRed font-semibold text-3xl mt-3 '>This is the comic title:</h2>
      <div className='md:grid grid-cols-6 mt-6'>
        <div className='col-start-0 col-span-2'>
          <Image src={require('../../img/Gotg_2.jpg')} alt='captain' objectFit='fill' width='300px' height='300px' layout='responsive'/>
        </div>
        <div className='col-start-3  col-span-4 p-10 bg-white'>
          <h2 className='font-bold text-2xl'>Specific title Here</h2>
          <p className='text-justify text-lg tracking-wide'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
          </p>
          <p className='mt-8 text-lg text-titleRed font-medium'>
            Characters:
            <Link href='/character'>
              <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>Groot</span>
            </Link>
          </p>
          <p className='mt-8 text-lg text-titleRed font-medium'>
            Creators:
            <Link href='/creator'>
              <span className='pl-4 font-normal italic hover:cursor-pointer hover:text-red-600'>Stan Lee</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail