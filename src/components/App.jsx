import React, { useEffect, useReducer } from "react"
import "./App.css"
import Header from "./Header"
import Main2 from "./Main2"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen"
import Question from "./Question"
import NextButton from "./NextButton"
import Progress from "./Progress"
import FinishScreen from "./FinishScreen"
import Footer from "./Footer"
import Timer from "./Timer"
import { useQuiz } from "../contexts/QuizContext"

export default function App() {
  const { status } = useQuiz()
  return (
    <div className="app">
      <Header />
      <Main2>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main2>
    </div>
  )
}
