import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Anecdote = ({anecdote, vote}) => {
  return (
    <>
    <p>{anecdote}</p>
    <p>Vote Count: {vote}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  console.log(votes)

  const selectQuote = () => {
    let randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const voteForQuote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    findMostVotes()
  }

  const findMostVotes = () => {
    let maxNumber = 0
    let voteIndex = 0
    console.log(mostVotes)
    for (let i=0; i < votes.length; i++) {
      if (votes[i] >= maxNumber) {
        maxNumber = votes[i]
        voteIndex = i
      }
    }
    setMostVotes(voteIndex)
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]}/>
      <Button handleClick={voteForQuote} text="Vote" />
      <Button handleClick={selectQuote} text="Random Anecdote" />
      <h2>Anecdote With Most Votes</h2>
      <Anecdote anecdote={anecdotes[mostVotes]} vote={votes[mostVotes]}/>
    </div>
  )
}

export default App
