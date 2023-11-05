import React from "react";
import Dashboard from "./Dashboard";
import { useGlobalContext } from "../context";
export default function Home() {

  const { start } = useGlobalContext();
  return (
    <>
      <div
        id="home"
        className="w-[100%] h-[100vh]   place-items-center  flex flex-col overflow-hidden px-2 "
        
      >
        <h1 className="text-[3rem] md:text-[6rem] text-center mt-[16rem]  md:mt-[16rem]  ">
          TechTrivia
        </h1>
        <p className=" text-[1.5rem] mt-2 md:text-[2rem] text-center capitalize">
          Unlock the Code to Your Knowledge - Test Your Tech IQ!
        </p>

        <button
          onClick={() => start()}
          className="btn btn-base-content md:text-[1.5rem] rounded-lg   drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] hover:scale-[1.01] overflow-visible mt-[10rem] md:mt-[10rem]  "
        >
          lets get started
        </button>
      </div>
      <Dashboard />
    </>
  );
}
