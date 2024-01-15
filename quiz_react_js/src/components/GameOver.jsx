import { useContext } from "react"
import { QuizContext } from "../context/quizjs"
import WellDone from "../img/welldone.svg"
import "./GameOver.css"

const GameOver = () => {
    const [quizjsState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">

        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizjsState.score}</p>
        <p>Você acertou {quizjsState.score} de {quizjsState.questions.length} perguntas.</p>
        <img src={WellDone} alt="Fim do Quiz"/>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver