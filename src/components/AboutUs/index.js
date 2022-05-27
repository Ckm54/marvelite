import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div>
      <div className='flex justify-between grid gap-4 md:grid-cols-12'>
        <div className='about-img col-start-0 col-span-4'>
          <Image src={require('../../img/about-us.jpg')} alt='captain' objectFit='cover' layout='responsive' width='500px' height='500px'/>
        </div>
        <div className='md:col-start-6 md:col-span-6 flex flex-col justify-center mt-10 p-6'>
          <div>
            <h2 className='p-4 text-titleRed text-4xl font-normal md:font-bold'>About This Site</h2>
            <p className='text-justify p-4 tracking-wide text-lg'>
              The marvel world is vast with lots of rather overwhelming information. To get to learn about the various characters and their specific comics, one can 
              easily be lost. With this site, that has been made a simpler and interractive process as you can now search for your favorite superhero character from 
              the marvel world and get all information including their specific comics and also the faces of the creators behind these comics.
            </p>
            <Link href='/'>
              <button className='bg-titleRed text-slate-50 px-4 py-2 border border-titleRed rounded font-medium text-lg float-right text-titleRed hover:text-red-600 hover:cursor-pointer hover:text-titleRed hover:bg-transparent'>Back to hero search</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About