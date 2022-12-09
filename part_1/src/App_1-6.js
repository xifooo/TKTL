import { useState } from "react"


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    // 以下三个方法都有错误：返回的都不是函数，因而会导致无限循环
    const setToGood = (newValue) => {
        console.log("good's value", newValue)
        setGood(newValue)
    }

    const setToNetural = (newValue) => {
        console.log("neutural's value", newValue)
        setNeutral(newValue)
    }

    const setToBad = (newValue) => {
        console.log("bad's value", newValue)
        setBad(newValue)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <button onClick={setToGood(good + 1)}>good</button>
            <button onClick={setToNetural(neutral + 1)}>neutral</button>
            <button onClick={setToBad(bad + 1)}>bad</button>

            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

export default App