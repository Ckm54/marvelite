import React from 'react'
import Link from "next/link"

function index() {
  return (
    <nav className='navbar'>
        <ul className='flex justify-between mx-10'>
          <li className='mt-6'>
            <Link href="/">
              Marvelite
            </Link>
          </li>
          <li className='mt-6'>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default index