import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import ResultPage from "./ResultPage";
export default function QuizPage() {
  const {
    questions,
    skipQuestion,
    handleOptions,
    prevQuestion,
    selectedAnswer,
  } = useGlobalContext();

  return (
    <>
      {questions?.map((question, index) => (
        <div
          key={index}
          id={index}
          className="h-[100vh] w-full flex flex-col place-content-center place-items-center    snap-center "
        >
          <div className="w-[60%] overflow-visible">
            <span className="md:text-[3rem]">{`${index + 1}/${
              questions.length
            }`}</span>{" "}
            <div className="questiondiv md:text-[2.2rem]  flex place-items-start w-full md:mb-[2rem] ">
              {question.question}
            </div>
            <div className="options flex  flex-wrap md:w-[100%] gap-[2rem] overflow-visible">
              {question.options?.map((option, optIndex) =>
                selectedAnswer ? (
                  <button
                    //  onClick={() =>
                    //    handleOptions(optIndex, question.correctAnswer)
                    //  }
                    key={optIndex}
                    className={`w-[48%] rounded-md  min-h-[3.5rem] flex place-items-center md:px-[1rem] border-[3px]  overflow-visible 
               ${optIndex === question.correctAnswer && "bg-[#36ec36]"} ${
                      optIndex != question.correctAnswer && "focus:bg-[#ff0000]"
                    } shadow-2xl hover:shadow-2xl md:text-xl`}
                  >
                    {option}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleOptions(optIndex, question.correctAnswer)
                    }
                    key={optIndex}
                    className={`w-[48%] rounded-md  min-h-[3.5rem] flex place-items-center md:px-[1rem] border-[3px] bg-base-200 overflow-visible shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] md:text-xl`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          <button
            onClick={() => skipQuestion()}
            className=" btn rounded-xl btn-warning border-[3px] border-white mt-[5rem] drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] hover:scale-[1.01]"
          >
            {/* {selectedAnswer ? "Next" : "Skip"} */}
            Skip
          </button>
        </div>
      ))}
      <section id="result" className="h-full w-full">
        <ResultPage />
      </section>
    </>
  );
}
