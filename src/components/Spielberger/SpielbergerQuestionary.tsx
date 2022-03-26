import { useState } from "react";
import { AnswersCommon, AnswersCurrent, calculateAnxiety, Questions } from "./spielbergerHelper";
import "./SpielbergerQuestionary.css"

export function SpielbergerQuestionary() {
    const [question, setQuestion] = useState<number>(0)
    const [answers, setAnswers] = useState<number[]>([])

    return <div className="sp_root">
        <div>{Questions[question]}</div>
        {question < 40 ? <div className="sp_answers_container">
            {question < 20 ? <>{Object.keys(AnswersCurrent).map((key) => {
                return <span key={key} className="sp_answer" onClick={() => {
                    setAnswers([...answers, Number.parseInt(key)])
                    setQuestion(question + 1)
                }}>
                    {AnswersCurrent[key]}
                </span>
            })}</> : <>{Object.keys(AnswersCommon).map((key) => {
                return <span key={key} className="sp_answer" onClick={() => {
                    setAnswers([...answers, Number.parseInt(key)])
                    setQuestion(question + 1)
                }}>
                    {AnswersCommon[key]}
                </span>
            })}</>}
        </div> : <div>
            Results:
            <div>
                {JSON.stringify(calculateAnxiety(answers))}
            </div>
        </div>}
    </div>
}