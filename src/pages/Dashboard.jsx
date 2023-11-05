import React from "react";
import QuizPage from "./QuizPage";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const {
    setCategory,
    category,
    difficulty,
    setDifficulty,
    startQuiz,
    GetQuiz,
  } = useGlobalContext();
  console.log(category);
  return (
    <>
      <div
        id="dashboard"
        className="w-[100%] h-[100%]   place-items-center place-content-center flex flex-col clas
 "
      >
        <form>
          <section id="category">
            <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col">
              <div
                className="flex gap-3 place-items-center mb-[5rem] "
                data-aos="fade-up"
              >
                <span></span>
                <span className="text-[2rem] md:text-[5rem] ">
                  Choose a category
                </span>
              </div>
              <div className="flex w-[100%] flex-wrap  place-content-evenly overflow-visible ">
                <a
                  href="#difficulty"
                  onClick={() => setCategory("React")}
                  className="w-[10rem] h-[10rem] mt-4 flex flex-col  place-items-center px-4 pt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.90)] hover:scale-[1.01] rounded-2xl bg-info-content   "
                >
                  <img
                    className="w-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                    alt=""
                  />
                  <span className="text-white">REACT</span>
                </a>

                <a
                  href="#difficulty"
                  onClick={() => setCategory("HTML")}
                  className="w-[10rem] h-[10rem] mt-4 flex flex-col place-items-center px-4 pt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.90)] hover:scale-[1.01] rounded-2xl bg-info-content   "
                >
                  <img
                    className="w-[90%]"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                  <span className="text-white">HTML</span>
                </a>
                <a
                  href="#difficulty"
                  onClick={() => setCategory("CSS")}
                  className="w-[10rem] h-[10rem] mt-4 flex flex-col place-items-center px-4 pt-4  drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.90)] hover:scale-[1.01] rounded-2xl bg-info-content "
                >
                  <img
                    className="w-[90%]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt=""
                  />
                  <span className="text-white">CSS</span>
                </a>
              </div>
            </div>
          </section>

          <section id="difficulty">
            <div className="w-[100%] h-[100vh]  place-items-center place-content-center flex flex-col">
              <span className="text-[2rem] md:text-[4rem] mb-[4rem]">
                Choose Difficulty
              </span>

              <div className="mcq-g flex flex-col gap-4 place-items-center text-center w-[100%] overflow-visible" >
                <button
                  type="button"
                  onClick={(e) => GetQuiz(e.target.name)}
                  name="Easy"
                  className="w-[27rem] hover:bg-[#0f172a] focus:bg-primary   bg-[#1e293b] text-white h-[3rem] flex place-items-center place-content-center px-2 rounded-md  border-[5px] text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.0)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,1)] "
                  data-theme="emerald">
                  Easy
                </button>
                <button
                  type="button"
                  onClick={(e) => GetQuiz(e.target.name)}
                  name="Medium"
                  className="w-[27rem]  hover:bg-[#0f172a] focus:bg-[#959530] bg-[#1e293b] text-white h-[3rem] flex place-items-center place-content-center  px-2 rounded-md  border-[5px] text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,1)] "
                >
                  Medium
                </button>
                <button
                  type="button"
                  onClick={(e) => GetQuiz(e.target.name)}
                  name="Hard"
                  className="w-[27rem]   hover:bg-[#0f172a] focus:bg-[#b13838] bg-[#1e293b] text-white h-[3rem] flex place-items-center place-content-center  px-2 rounded-md  border-[5px] text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,1)] "
                >
                  Hard
                </button>
                <button
                  id="we"
                  onClick={() => startQuiz()}
                  className="px-3 py-2 bg-secondary md:text-[1.5rem] rounded-lg  md:mt-[10rem] drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] hover:scale-[1.01]"
                >
                  lets get started
                </button>
              </div>
            </div>
          </section>
        </form>

        <section id="quizPage" className="h-full w-full snap-y snap-mandatory">
          <QuizPage />
        </section>
      </div>
    </>
  );
}
