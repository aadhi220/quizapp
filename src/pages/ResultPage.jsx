import React from "react";
import { useGlobalContext } from "../context";

export default function ResultPage() {
  const { correct ,category,difficulty } = useGlobalContext();

  const calculate = (score) => {
    switch (true) {
      case score <= 3:
        return 'Your performance requires more practice and improvement.';
      case score <= 5:
        return "You're close, keep trying for better results next time.";
      case score <= 7:
        return 'You have the potential to perform even better.';
      case score <= 9:
        return 'Great job! Your performance is impressive.';
      default:
        return "Congratulations! You're an exceptional genius.";
    };
  };

  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="h-[100vh] w-full flex place-content-center place-items-center">
      <div className="h-[80%] w-[80%] backdrop-blur-xl bg-white/30 rounded-3xl flex flex-col place-content-evenly place-items-center">
        <div
          className="radial-progress bg-primary text-primary-content border-4 border-primary scale-105"
          style={{ "--value": correct * 10 }}
        >
          <span className="ps-2">{correct * 10}%</span>
        </div>
        <div className="w-full flex place-content-around text-3xl"><span>Category : {category} </span> <span>Difficulty : {difficulty}</span></div>
       <span className="text-2xl"> {calculate(correct)}</span>
        <button className="btn btn-success rounded-2xl" onClick={() => up()}>
          Try Again!
        </button>
      </div>
    </div>
  );
}
