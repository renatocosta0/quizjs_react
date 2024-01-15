import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quizjs"
import  Question from "./components/Question"
import Welcome from "./components/Welcome"
import GameOver from "./components/GameOver"
import PickCategory from "./components/PickCategory";

import './App.css'

function App() {

  const [quizjsState, dispatch] = useContext(QuizContext)


  return (
      <div className='App'>
        <h1>Quiz de Programação</h1>
        {quizjsState.gameStage === "Start" && <Welcome/>}
        {quizjsState.gameStage === "Category" && <PickCategory />}
        {quizjsState.gameStage === "Playing" && <Question/>}
        {quizjsState.gameStage === "End" && <GameOver />}

      </div>
 
  )
}

export default App
