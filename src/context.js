import React, { useState, useContext } from "react";
import axios from "axios";
import database from "./database/quiz.json";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState(0)
  const [error, setError] = useState(false);

  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "Code",
    difficulty: "easy",
  });

  const [category, setCategory] = useState("React");
  const [difficulty, setDifficulty] = useState("Easy");

  const startQuiz = () => {
    // const filteredData = database.filter((data) => data.category === category && data.difficulty === difficulty);
    // setQuestions(filteredData);
  
    // Scroll down 100vh
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
      behavior: 'smooth', // Optional: You can use 'auto' for instant scrolling
    });
  };
  
  const GetQuiz =(value)=>{
    setDifficulty(value)
    const filteredData = database.filter((data) => data.category === category && data.difficulty === difficulty);
    setQuestions(filteredData);
  }
  const skipQuestion =()=>{
if(!selectedAnswer) {
  window.scrollTo({
    top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
    behavior: 'smooth', // Optional: You can use 'auto' for instant scrolling
  });
}
  }

  const handleOptions = (selected, correctAnswer) => {
    
    if(selected===correctAnswer) {
      setCorrect(correct+1)
    }
    setSelectedAnswer(true);
     
      
      // Add a 1-second (1000 milliseconds) delay using setTimeout
      setTimeout(() => {
        setSelectedAnswer(false)
        window.scrollTo({
          top: window.scrollY + window.innerHeight,
          behavior: 'smooth',
        });
      }, 500); // 1000 milliseconds = 1 second
   
  };
  
  const prevQuestion =()=> {
    window.scrollTo({
      top: window.scrollY - window.innerHeight, // Scrolls down by one viewport height
      behavior: 'smooth', // Optional: You can use 'auto' for instant scrolling
    });
  }

  const HandleCategory=()=> {
    
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scrolls down by one viewport height
      behavior: 'smooth', // Optional: You can use 'auto' for instant scrolling
    });
  }

  

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
        HandleCategory

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
