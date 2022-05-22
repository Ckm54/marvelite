import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className='max-w-8xl px-5 mx-auto container'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Image src={require('../../img/about-us.jpg')} alt='captain' objectFit='cover' layout='responsive' width='500px' height='500px'/>
        <div className='flex flex-col justify-center mt-10 p-6'>
          <div>
            <h2 className='p-4 text-4xl font-normal md:font-bold'>About This Site</h2>
            <p className='text-justify p-4'>
              The marvel world is vast with lots of rather overwhelming information. To get to learn about the various characters and their specific comics, one can 
              easily be lost. With this site, that has been made a simpler and interractive process as you can now search for your favorite superhero character from 
              the marvel world and get all information including their specific comics and also the faces of the creators behind these comics.
            </p>
            <Link href='/'>
              <button className='float-right mx-5 px-5 py-3 bg-sky-500 hover:bg-sky-500/50'>back to hero search</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About