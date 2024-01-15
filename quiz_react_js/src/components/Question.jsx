import { useContext } from "react"
import { QuizContext } from "../context/quizjs"
import "./Question.css"
import Option from "./Option"

const Question = () => {
    const [quizjsState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizjsState.questions[quizjsState.currentQuestion]
   
   const onSelectOption = (option) => {

    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option},
    });

   }

  return (
    <div id="question">
        <p>Pergunta {quizjsState.currentQuestion + 1} de {quizjsState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            {currentQuestion.options.map((option) => (
                <Option 
                option={option} 
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                hide={quizjsState.optionToHide === option ? "hide" : null}
                />
            ) )}
        </div>
        {!quizjsState.answerSelected && !quizjsState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        </>
      )}
       {!quizjsState.answerSelected && quizjsState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
        {quizjsState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
          Continuar
        </button>)}
    </div>
  )
}

export default Question