import React from "react";

export default function Dashboard() {
  return (
    <>
      <div
        id="dashboard"
        className="w-[100%] h-[100%]   place-items-center place-content-center flex flex-col  "
        >
       <section id="category">
          <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col"> 
          <div className="flex gap-3 place-items-center mb-[1rem]"  data-aos="fade-up"><span><i class="fa-solid fa-angles-right fa-2xl"></i></span><span className="text-[2rem]">Choose a category</span></div>
          
          <div className="mcq-g flex flex-col gap-4 place-items-center w-[100%]">
            <div   className="w-[20rem] hover:bg-red-400    bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >Reactjs</div>
            <div  className="w-[20rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >Reactjs</div>
            <div className="w-[20rem]   hover:bg-red-400  bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >Reactjs</div>
            <div  className="w-[20rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >Reactjs</div>
  
          </div>
          </div>
       </section>

       <section id="difficulty">
       <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col"> 
        <div className="flex gap-3 place-items-center mb-[1rem]"><span><i class="fa-solid fa-angles-right fa-2xl"></i></span><span className="text-[2rem]">Choose Difficulty</span></div>
        
        <div className="mcq-g flex flex-col gap-4 place-items-center w-[100%]">
          <div   className="w-[20rem] hover:bg-red-400    bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >Easy</div>
          <div  className="w-[20rem]  hover:bg-red-400   bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >medium</div>
          <div className="w-[20rem]   hover:bg-red-400  bg-[grey] h-[3rem] flex place-items-center px-2 rounded-md ring-[5px] border-[5px]" >hard</div>
         

        </div>
        </div>

       </section>






      </div>


      
    </>
  );
}
