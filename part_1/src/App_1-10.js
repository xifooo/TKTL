import { useState } from "react"


const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

const StatisticLine = (props) => <p>{props.text} <strong>{props.value}</strong></p>

// Refactoring the components
const Statistics = (props) => {

    var all = props.good + props.neutral + props.bad;
    var avg = (all === 0) ? 0 : (props.good-props.bad)/all;
    var positive = (all === 0) ? 0 : props.good/all*100;

    return (
        <div>
            <h2>Statistics</h2>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="avg" value={avg} />
            <StatisticLine text="positive" value={positive} />
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

    if (good + neutral + bad !== 0) {
        return (
            <div>
                <h2>give feedback</h2>
                <Button handleClick={setToGood(good +1)} text="good" />
                <Button handleClick={setToNetural(neutral +1)} text="neutral" />
                <Button handleClick={setToBad(bad +1)} text="bad" />
                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        )
    }else {
        return (
            <div>
                <h2>give feedback</h2>
                <Button handleClick={setToGood(good +1)} text="good" />
                <Button handleClick={setToNetural(neutral +1)} text="neutral" />
                <Button handleClick={setToBad(bad +1)} text="bad" />
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    }

export default App