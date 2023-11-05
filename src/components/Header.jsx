import React from 'react'
import { useGlobalContext } from "../context";
export default function Header() {
  const {correct}=useGlobalContext();
  const up =()=> {
    window.scrollTo({
      top: 0, // Scrolls to the top of the page
      behavior: 'smooth', // Optional: You can use 'auto' for instant scrolling
    });
  }
  return (
    <>
    <div  className='w-[100%] fixed flex place-content-end bg-[#00000038]'><button onClick={()=>up()} className='bg-white'>{correct} Darkmode </button></div>
    
    </>
  )
}
