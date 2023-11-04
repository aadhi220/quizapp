import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div  className=''>
        <div  className="w-[100%] h-[100vh] bg-  place-items-center  flex flex-col">
<h1 className='text-[3rem] md:text-[6rem] text-center md:mt-[16rem]  '>TechTrivia</h1>
<p className=' md:text-[2rem]'>take a quick quiz to check your tech knowlodge</p>



<a href="#dashboard"><button  className='px-3 py-2 bg-[yellow] md:text-[1.5rem] rounded-lg  md:mt-[10rem]'>lets get started</button>
</a>
        </div>
        <Dashboard/>
    </div>
  )
}
