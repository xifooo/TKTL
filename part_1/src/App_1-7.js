import { useState } from "react"


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)
    const [positive, setPositive] = useState(0)

    const setToGood = (newValue) => () => {
        console.log("good's value", newValue)
        setGood(newValue)

        setAll(all + 1)
        setAvg((good-bad) / all)
        setPositive(good / all * 100)
    };
    
    const setToNetural = (newValue) => () => {
        console.log("neutural's value", newValue)
        setNeutral(newValue)
        
        setAll(all + 1)
    };
    
    const setToBad = (newValue) => () => {
        console.log("bad's value", newValue)
        setBad(newValue)
        
        setAll(all + 1)
        setAvg((good-bad) / all)
        setPositive(good / all * 100)
    };

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
            <p>all {all}</p>
            <p>average {avg}</p>
            <p>positive {positive + "%"}</p>
        </div>
    )
}

export default App