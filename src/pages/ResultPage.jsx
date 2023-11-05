import React from "react";
import { useGlobalContext } from "../context";
export default function ResultPage() {
    const {correct}=useGlobalContext();
  const up = () => {
    window.scrollTo({
      top: 0, // Scrolls to the top of the page
      behavior: "auto", // Optional: You can use 'auto' for instant scrolling
    });
  };
  return (
    <div className="h-[100vh] w-full flex place-content-center place-items-center">
      <div className="h-[80%] w-[80%] backdrop-blur-xl bg-white/30 rounded-3xl flex place-content-center place-items-center">
        <div className="overflow-visible">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary scale-105"
            style={{ "--value":  correct*10}}
          >
            {correct}/10
          </div>
        </div>
      </div>
    </div>
  );
}
