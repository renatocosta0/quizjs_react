import { useContext } from "react"
import { QuizContext } from "../context/quizjs"

import Quiz from "../img/quiz.svg"
import "./Welcome.css"

const Welcome = () => {
  const [quizjsState, dispatch] = useContext(QuizContext)

 

  return (
    <div id="welcome">Seja bem vindo
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome