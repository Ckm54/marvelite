import Image from 'next/image'
import React from 'react'
import Comics from '../Comics'

function Info() {
  return (
    <div>
      <h2 className='text-titleRed font-semibold text-2xl pl-4 mt-3 md:ml-10'>SuperHero:</h2>
      <div className='md:grid grid-cols-8 mt-6'>
        <div className='col-start-2 col-span-2'>
          <Image src={require('../../img/groot.jpg')} alt='captain' objectFit='cover' width='500px' height='400px' layout='responsive'/>
        </div>
        <div className='col-start-4 col-span-4 px-6 bg-white py-6'>
          <h2 className='font-bold text-2xl'>Groot</h2>
          <p className='text-justify'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
          
          </p>
          <p className='mt-8'>Comics: 1200 | Events: 345 | Appearances: 90</p>
        </div>
      </div>
      <Comics />
    </div>
  )
}

export default Info