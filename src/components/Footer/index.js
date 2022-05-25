import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-black h-40 mt-10 py-5 px-10'>
      <Link href="/">
        <h3 className='text-red-500 font-bold text-4xl hover:cursor-pointer hover:text-red-600'>Marvelite</h3>
      </Link>
      <p className='text-white py-4'>Designed & created by: <span className='italic text-titleRed'>Collins Kiplangat</span> &copy; 2022</p>
    </footer>
  )
}

export default Footer