import { useContext } from "react"
import { QuizContext } from "../context/quizjs"
import "./Option.css"

const Option = ({option, selectOption, hide, answer }) => {
    const [quizjsState, dispatch] = useContext(QuizContext)
  return (
    <div className={`option ${quizjsState.answerSelected && option === answer ? "correct" : ""} 
    ${quizjsState.answerSelected && option !== answer ? "wrong" : ""}
    ${hide ? "hide" : ""} `} onClick={() => selectOption()}>
     <p>{option}</p>
    </div>
  )
}

export default Option