import React from 'react'
import Link from "next/link"

function index() {
  return (
    <nav className='navbar px-5'>
        <ul className='flex justify-between mx-10'>
          <li className='mt-6 text-4xl font-semibold text-titleRed hover:text-red-600'>
            <Link href="/">
              Marvelite
            </Link>
          </li>
          <li className='mt-6 text-titleRed font-semibold text-2xl hover:text-red-600'>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
        <h2 className='text-5xl md:text-6xl font-bold xl:mt-20 ml-10 text-headerText'>All your SuperHero <br /> info in one place</h2>
    </nav>
  )
}

export default index