import { useState } from "react"

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 })
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)

  function generateRandomAnecdote() {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    return setSelected(randomAnecdote)
  }

  function voteAnecdote() {
    const copyPoints = { ...points }
    copyPoints[selected] += 1
    setPoints(copyPoints)

    if (copyPoints[selected] > copyPoints[mostVotedAnecdote]) {
      setMostVotedAnecdote(selected)
    }
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <DisplayVotes votes={points[selected]} />
      <Button handleClick={voteAnecdote} text="vote" />
      <Button handleClick={generateRandomAnecdote} text="next anecdote" />
      <Header title="Anecdote with most votes" />
      <DisplayAnecdote anecdote={anecdotes[mostVotedAnecdote]} />
      <DisplayVotes votes={points[mostVotedAnecdote]} />
    </div>
  )
}

function DisplayAnecdote({ anecdote }) {
  return <p>{anecdote}</p>
}

function DisplayVotes({ votes }) {
  return <p>has {votes} votes</p>
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function Header({ title }) {
  return <h1>{title}</h1>
}
export default App
