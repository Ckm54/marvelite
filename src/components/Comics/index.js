import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Comics() {
  return (
    <div>
      <h3 className='text-titleRed font-semibold text-2xl pl-4 mt-3 md:ml-10'>Comics:</h3>
      <div className='max-w-10xl px-5 mx-auto container md:grid gap-2 grid-cols-3 mt-2'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-white'>
          <div>
            <Image src={require('../../img/Gotg_2.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <div className='px-5 text-justify mb-7 pb-5'>
            <h4 className='py-3 text-lg'>captain</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
              of Lorem Ipsum.
            </p>
            <Link href='/information'>
              <p className='float-right py-6'>check it out</p>
            </Link>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-white'>
          <div>
            <Image src={require('../../img/Gotg_2.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <div className='px-5 text-justify mb-7 pb-5'>
            <h4 className='py-3 text-lg'>captain</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
              of Lorem Ipsum.
            </p>
            <Link href='/information'>
              <p className='float-right py-6'>check it out</p>
            </Link>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-white'>
          <div>
            <Image src={require('../../img/Gotg_2.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <div className='px-5 text-justify mb-7 pb-5'>
            <h4 className='py-3 text-lg'>captain</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
              of Lorem Ipsum.
            </p>
            <Link href='/information'>
              <p className='float-right py-6'>check it out</p>
            </Link>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-white'>
          <div>
            <Image src={require('../../img/Gotg_2.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <div className='px-5 text-justify mb-7 pb-5'>
            <h4 className='py-3 text-lg'>captain</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
              of Lorem Ipsum.
            </p>
            <Link href='/information'>
              <p className='float-right py-6'>check it out</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comics