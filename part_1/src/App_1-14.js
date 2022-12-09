import { useState } from 'react'


const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>


const MostVotes = (props) => {
  var index = (() => Object.keys(props.voted).sort(function(a, b){return props.voted[b]-props.voted[a]})[0]) ();

  // console.log(index);

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[index-1]}</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const [selected, setSelected] = useState(0);
  
  const getRandom = (max) => Math.floor(Math.random() * max);
  const nextAnecdote = () => () => setSelected(getRandom(anecdotes.length));
  
  const anecdotesVotes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  };
  const [voted, setVoted] = useState({...anecdotesVotes});
  const vote = (selected) => () => {
    console.log("voted to", selected);
    var votes = { ...voted };
    votes[selected] += 1;
    setVoted(votes);
    console.log(selected, "votes is", voted[selected]);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h4>{anecdotes[selected]}</h4>
      <Button handleClick={vote(selected + 1)} text="vote" />
      <Button handleClick={nextAnecdote()} text="next anecdote" />
      <MostVotes anecdotes={anecdotes} voted={voted} />
    </div>
  )
}

export default App