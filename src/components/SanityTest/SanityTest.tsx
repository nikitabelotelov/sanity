import { useMemo, useState } from "react"
import { generateCode } from "./codeGenHelper"
import './SanityTest.css'
import classNames from "classnames"
import { CodeChecker } from "../CodeChecker/CodeChecker"
import { codeChecker } from "../CodeChecker/codeCheckerHelper"

function formatCode(code: number[]) {
    let res: string[] = []
    code.forEach((el, idx) => {
        if (idx % 3 === 0 && idx !== 0) {
            res.push(' ' + el)
        } else {
            res.push('' + el)
        }
    })
    return res
}

const SHOW_TIMER = 10000;
const QUIZ_STATES = {
    'idle': 0,
    'show': 1,
    'remember': 2,
    'result': 3
}
const CODE_LENGTH = 9;

export function SanityTest() {
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState<number[] | null>(null)
    const [quizState, setQuizState] = useState(QUIZ_STATES.idle)
    const [result, setResult] = useState('')

    const body = useMemo(() => {
        switch (quizState) {
            case QUIZ_STATES.idle:
                return <>
                    <h1>Тест на рассудительность</h1>
                    <p>Проверьте насколько трезво вы сейчас мыслите.<br />Вам нужно запомнить ряд цифр, а затем вписать все, что сможете вспомнить.</p>
                    <button className="test_start" onClick={() => {
                        setCode(generateCode(CODE_LENGTH))
                        setQuizState(QUIZ_STATES.show)
                        setTimeout(() => {
                            setLoading(true)
                        })
                        setTimeout(() => {
                            setQuizState(QUIZ_STATES.remember)
                            setLoading(false)
                        }, SHOW_TIMER)
                    }}>Начать</button>
                </>
            case QUIZ_STATES.show:
                return <>
                    <div className="code">{formatCode(code!)}</div>
                    <div className="loader_container">
                        <div className={classNames("loader", { "loading": loading })}></div>
                    </div>
                </>
            case QUIZ_STATES.remember:
                return <>
                    <p>Введите все цифры, которые можете вспомнить</p>
                    <CodeChecker codeLength={CODE_LENGTH} onApply={(value) => {
                        if (code) {
                            const check = codeChecker(code!, value)
                            if (check <= code.length / 3) {
                                setResult('Вам определенно стоит успокоиться и подождать.')
                            } else if (check <= (code.length / 3) * 2) {
                                setResult('Вы показали средний результат. Возможно с важными решениями стоит подождать.')
                            } else {
                                setResult('Вы трезво мыслите и способны принять осознанное решение.')
                            }
                            setQuizState(QUIZ_STATES.result)
                        }
                    }} />
                </>
            case QUIZ_STATES.result:
                return <>
                    {result}
                    <button onClick={() => {
                        setQuizState(QUIZ_STATES.idle)
                    }}>Пройти еще раз</button>
                </>
        }
    }, [quizState, loading])

    return <div className="test_root">
        {body}
    </div>
}