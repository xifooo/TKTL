import { useState } from "react"

// Refactoring the components
// a proper place to define a component
const Statistics = (props) => {
    var all = props.good + props.neutral + props.bad;

    return (
        <div>
            <h2>Statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>

            <p>all <strong> {all} </strong></p>
            <p>average <strong> {(all === 0) ? 0 : (props.good-props.bad)/all } </strong></p>
            <p>positive <strong> {(all === 0) ? 0 : props.good/all*100 } % </strong></p>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const setToGood = (newValue) => () => {
        console.log("good's value", newValue);
        setGood(newValue);
    };
    
    const setToNetural = (newValue) => () => {
        console.log("neutural's value", newValue);
        setNeutral(newValue);
    };
    
    const setToBad = (newValue) => () => {
        console.log("bad's value", newValue);
        setBad(newValue);
    };

    return (
        <div>
            <h2>give feedback</h2>
            <button onClick={setToGood(good + 1)}>good</button>
            <button onClick={setToNetural(neutral + 1)}>neutral</button>
            <button onClick={setToBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App