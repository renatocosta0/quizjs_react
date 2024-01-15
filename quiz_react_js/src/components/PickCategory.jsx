import { useContext } from "react";

import { QuizContext } from "../context/quizjs";

import Category from "../img/category.svg";

import "./PickCategory.css";



const PickCategory = () => {

  const [quizjsState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
    <h2>Escolha uma categoria</h2>
    <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
    {quizjsState.questions.map((question) => (
      <button
        onClick={() => chooseCategoryAndReorderQuestions(question.category)}
        key={question.category}
      >
        {question.category}
      </button>
    ))}

    <img src={Category} alt="Categoria do Quiz" />
  </div>
  )
}

export default PickCategory