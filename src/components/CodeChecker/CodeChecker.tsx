import { useState } from "react";
import "./CodeChecker.css"

interface IProps {
    onApply: (code: string) => void
    codeLength: number
}

export function CodeChecker(props: IProps) {
    const [value, setValue] = useState('')
    return <>
        <input type="number"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    props.onApply(value)
                }
            }}
            className="field"
            value={value}
            autoFocus
            maxLength={props.codeLength}
            onChange={(e) => { setValue(e.target.value) }} />
        <button onClick={() => { props.onApply(value) }}>
            Проверить
        </button>
    </>
}