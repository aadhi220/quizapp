import React from "react";
import QuizPage from "./QuizPage";
import { useGlobalContext } from "../context";
export default function Dashboard() {

  return (
    <>
      <div
        id="dashboard"
        className="w-[100%] h-[100%]   place-items-center place-content-center flex flex-col  "
        >
       <section id="category">
          <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col"> 
          <div className="flex gap-3 place-items-center mb-[5rem] "  data-aos="fade-up"><span></span><span className="text-[2rem] md:text-[5rem] ">Choose a category</span></div>
          
          <div className="mcq-g flex flex-col md:gap-[2rem] place-items-center w-[100%]">
            <div   className="w-[27rem] hover:bg-red-400    bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >Reactjs</div>
            <div  className="w-[27rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >Reactjs</div>
            <div className="w-[27rem]   hover:bg-red-400  bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >Reactjs</div>
            <div  className="w-[27rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >Reactjs</div>
  
          </div>
          </div>
       </section>

       <section id="difficulty">
       <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col"> 
        <div className="flex gap-3 place-items-center mb-[1rem]"><span><i class="fa-solid fa-angles-right fa-2xl"></i></span><span className="text-[2rem] md:text-[4rem]">Choose Difficulty</span></div>
        
        <div className="mcq-g flex flex-col gap-4 place-items-center w-[100%]">
          <div   className="w-[27rem] hover:bg-red-400    bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >Easy</div>
          <div  className="w-[27rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >medium</div>
          <div className="w-[27rem]   hover:bg-red-400  bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md  border-[5px]" >hard</div>
         

        </div>
        </div>


       </section>

       <section id="quizPage" className="h-full w-full">
        <QuizPage/>
       </section>

  






      </div>


      
    </>
  );
}
