import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-black h-40 mt-6 p-5'>
      <Link href="/">
        <h3 className='text-red-500 font-bold text-4xl hover:cursor-pointer'>Marvelite</h3>
      </Link>
      <p className='text-white py-4'>Developer Contact</p>
    </footer>
  )
}

export default Footer