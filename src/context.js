import React, { useState, useContext } from "react";
import axios from "axios";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

// const API_ENDPOINT = "https://opentdb.com/api.php?";


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const fetchQuestions = async () => {
    const apiKey = '6QB98ZWk2B682Y1wqntPGJNS1fSb7x457ByvjodV';
    
const url = 'https://quizapi.io/api/v1/questions';
    setLoading(true);
    setWaiting(false);
    const response = await axios(url,{params:{
        apiKey:apiKey,
        limit:10,
        category:"linux",
        difficulty:"easy"
    }}).catch((err) => console.log(err));
    if (response) {
      const data = response.data;
    console.log(response);
      if (data) {
        setQuestions(data);
        setWaiting(false);
        setLoading(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
     }
  };
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const openModal = () => {

  }

  const checkAnswer = (value)=> {
    if(value) {
        setCorrect((oldState)=>oldState+1);

    }
    nextQuestion();

  }

  const handleChange = (e)=> {
    const {name,value}=e.target;
    setQuiz({...quiz, [name] : value});
  };
//   const handleSubmit =(e)=> {
//     e.preventDefult();
//     const {amount,category,difficulty}=quiz;
//     const url=` ${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
//     fetch(url)
//   }

  return (
    <AppContext.Provider value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        nextQuestion,
        checkAnswer,
        quiz,
        handleChange,
        // handleSubmit,
        fetchQuestions

    }}
    >
 {children}

    </AppContext.Provider>
   
  )

};

export const useGlobalContext = ()=> {
    return useContext(AppContext);

}

export {AppContext,AppProvider};