import React from 'react'
import Image from "next/image"
import Link from 'next/link'

function Thumbnails() {
  return (
    <div className='max-w-8xl px-5 mx-auto container grid gap-4 grid-cols-4 mt-6'>
      <Link href='/information'>
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='scale-100 hover:scale-105 ease-in duration-200'>
            <Image src={require('../../img/img3.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>captain</h4>
        </div>
      </Link>
      <Link href='/information'>
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='scale-100 hover:scale-105 ease-in duration-200'>
            <Image src={require('../../img/captain.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>captain</h4>
        </div>
      </Link>
      <Link href='/information'>
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='scale-100 hover:scale-105 ease-in duration-200'>
            <Image src={require('../../img/img3.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>captain</h4>
        </div>
      </Link>
      <Link href='/information'>
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='scale-100 hover:scale-105 ease-in duration-200'>
            <Image src={require('../../img/img3.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>captain</h4>
        </div>
      </Link>
      <Link href='/information'>
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='scale-100 hover:scale-105 ease-in duration-200'>
            <Image src={require('../../img/img3.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
          </div>
          <h4 className='px-4 py-3 text-lg font-semibold text-2xl'>captain</h4>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnails