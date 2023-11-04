import React, { useEffect } from 'react'
import { useGlobalContext } from "../context";
export default function QuizPage() {
  const {    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    handleChange,
    // handleSubmit,
    fetchQuestions}=useGlobalContext();
useEffect(() => {
fetchQuestions()
  
},[]);
const handleOptions=(e) =>{

}
console.log(questions);
  return (
    <>
{questions?.map((question,index)=> (
      <div key={question?.id} id={index} className='h-[100vh] w-full flex flex-col place-content-center place-items-center  '>
      <div className='w-[60%] '>
          <span className='md:text-[3rem]'>{`${index+1}/${questions?.length}`}</span> <div className='questiondiv md:text-[3rem]  flex place-items-start w-full md:mb-[2rem] '>{question?.question}</div>
       <div className='options flex  flex-wrap md:w-[100%] gap-[2rem]'>
   
           
          { Object.entries(question.answers)?.map(([option,text])=>(
            text &&  <a href={`#${index+1}`} key={option} onClick={((e)=>handleOptions(e))} className='w-[48%] rounded-md  md:h-[3.5rem] flex place-items-center md:px-[1rem] border-[5px] bg-[red]'> {text}</a>
          ))}
        
       </div>
      </div>
   
       </div>
))}


    
    
    
    </>
  )
}
