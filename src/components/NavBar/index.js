import React from 'react'
import Link from "next/link"

function index() {
  return (
    <nav className='navbar'>
        <ul className='flex justify-between mx-10'>
          <li className='mt-6 text-4xl font-semibold text-titleRed'>
            <Link href="/">
              Marvelite
            </Link>
          </li>
          <li className='mt-6 text-titleRed font-semibold text-2xl'>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
        <h2 className='text-6xl font-bold mt-20 ml-10 text-headerText'>All your SuperHero <br /> info in one place</h2>
    </nav>
  )
}

export default index