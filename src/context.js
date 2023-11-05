import React, { useState, useContext } from "react";
import database from "./database/quiz.json";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("React");
  const [difficulty, setDifficulty] = useState("Easy");
  const [progress, setProgress] = useState(false);
  const [starts, setStarts] = useState(false);

  const startQuiz = () => {
    // e.preventDefault()

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    }, 500);

    setTimeout(() => {
      setProgress(true);
    }, 1500);

    // Scroll down 100vh
  };

  const GetQuiz = (value) => {
    // e.preventDefault();
    setDifficulty(value);
    const filteredData = database.filter(
      (data) => data.category === category && data.difficulty === difficulty
    );
    setQuestions(filteredData);
    setStarts(true);
  };
  const skipQuestion = () => {
    if (!selectedAnswer) {
      window.scrollTo({
        top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
        behavior: "smooth",
      });
    }
  };

  const handleOptions = (selected, correctAnswer) => {
    setLoading(true);
    if (selected === correctAnswer) {
      setCorrect(correct + 1);
    }
    setSelectedAnswer(true);

    // Add a 1-second (1000 milliseconds) delay using setTimeout
    setTimeout(() => {
      setSelectedAnswer(false);
      setLoading(false);
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    }, 500); // 1000 milliseconds = 1 second
  };

  const prevQuestion = () => {
    window.scrollTo({
      top: window.scrollY - window.innerHeight, // Scrolls down by one viewport height
      behavior: "smooth",
    });
  };

  const handleCategory = (e, name) => {
    e.preventDefault();
    setCategory(name);
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
      behavior: "smooth",
    });
  };

  const start = () => {
    setCorrect(0);
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
      behavior: "smooth",
    });
  };

  return (
    <AppContext.Provider
      value={{
        startQuiz,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        questions,
        GetQuiz,
        skipQuestion,
        handleOptions,
        prevQuestion,
        selectedAnswer,
        correct,
        setCorrect,
        handleCategory,
        darkMode,
        setDarkMode,
        start,
        loading,
        progress,
        setProgress,
        setStarts,
        starts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
