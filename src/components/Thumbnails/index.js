import React from 'react'
import Image from "next/image"

function Thumbnails() {
  return (
    <div className='max-w-6xl px-5 mx-auto container grid gap-4 grid-cols-3 mx-5 mt-6'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <Image src={require('../../img/img3.jpg')} alt='captain' objectFit='cover' width='500px' height='600px' layout='responsive'/>
        </div>
        <h4 className='px-4 py-3 text-lg'>captain</h4>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <Image src={require('../../img/captain.jpg')} alt='captain'  objectFit='cover' width='500px' height='600px' layout='responsive'/>
        </div>
        <h4 className='px-4 py-3 text-lg'>captain</h4>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <Image src={require('../../img/captain.jpg')} alt='captain'  objectFit='cover' width='500px' height='600px' layout='responsive'/>
        </div>
        <h4 className='px-4 py-3 text-lg'>captain</h4>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <Image src={require('../../img/captain.jpg')} alt='captain'  objectFit='cover' width='500px' height='600px' layout='responsive'/>
        </div>
        <h4 className='px-4 py-3 text-lg'>captain</h4>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div>
          <Image src={require('../../img/captain.jpg')} alt='captain'  objectFit='cover' width='500px' height='600px' layout='responsive'/>
        </div>
        <h4 className='px-4 py-3 text-lg'>captain</h4>
      </div>
    </div>
  )
}

export default Thumbnails