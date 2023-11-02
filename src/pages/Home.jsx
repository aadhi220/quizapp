import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div className=''>
        <div  className="w-[100%] h-[100vh] bg-  place-items-center place-content-center flex flex-col">
<h1 className='text-[3rem] text-center   '>TechTrivia</h1>
<p>take a quick quiz to check your tech knowlodge</p>



<a href="#dashboard"><button  className='px-2 py-1 bg-[yellow]'>lets get started</button>
</a>
        </div>
        <Dashboard/>
    </div>
  )
}
