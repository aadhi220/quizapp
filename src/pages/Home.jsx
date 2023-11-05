import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import { useGlobalContext } from "../context";
export default function Home() {
  const {setCorrect,skipQuestion}=useGlobalContext();
  return (
    <div  className='overflow-hidden'>
        <div id='home' className="w-[100%] h-[100vh] bg-  place-items-center  flex flex-col overflow-hidden ">
<h1 className='text-[3rem] md:text-[6rem] text-center md:mt-[16rem]  '>TechTrivia</h1>
<p className=' md:text-[2rem]'>take a quick quiz to check your tech knowlodge</p>



<button onClick={()=>skipQuestion()} className='overflow-visible'> <button onClick={()=>setCorrect(0)} className='btn btn-base-content md:text-[1.5rem] rounded-lg  md:mt-[10rem] drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] hover:scale-[1.01]  '>lets get started</button> 
</button>
        </div>
        <Dashboard/>
    </div>
  )
}
