import { useState } from 'react'

const Button = (props) => (
<button onClick = {props.handleClick}>
  {props.text}
</button>
)

const Statistics = (props) => {
  return(
    <div><p>{props.text} {props.data}</p></div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [selected, setSelected] = useState(0)

  const points = Array(6).fill(0)

  const copy = [...points] 

  const handleVotes = () => {
    if ( selected === 0){
      copy[0] +=1
    }
    else if( selected === 1){
      copy[1] +=1
    }
    else if( selected === 2){
      copy[2] +=1
    }
    else if( selected === 3){
      copy[3] +=1
    }
    else if( selected === 4){
      copy[4] +=1
    }
    else if( selected === 5){
      copy[5] +=1
    }
}


  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(((good - bad) + 1) / all)
    setPositive((good / all) * 100)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(((good - bad) + 1) / all)
    setPositive((good / all) * 100)

  }

  const handleBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(((good - bad) - 1) / all)
    setPositive((good / all) * 100)
  }

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * 6) + 1)
  }

  

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick = {() => handleGood()} text = "good" />
      <Button handleClick = {() => handleNeutral()} text = "neutral" />
      <Button handleClick = {() => handleBad()} text = "bad" />
      
<table>
<tbody>
  <tr>
    <td><Statistics text = "good" data = {good}/></td>
  </tr>
  <tr>
    <td><Statistics text = "neutral" data = {neutral}/></td>
  </tr>
  <tr>
    <td><Statistics text = "bad" data = {bad}/></td>
  </tr>
  <tr>
    <td><Statistics text = "all" data = {all}/></td>
  </tr>
  <tr>
    <td><Statistics text = "average" data = {average}/> </td>
  </tr>
  <tr>
    <td><Statistics text = "positive" data = {positive}/></td>
  </tr>
  </tbody>
  </table> 

    <h2>Anecdote of the day</h2>
    <p> {anecdotes[selected]} </p>  
    <p> has {copy[selected]} votes </p>
    <Button handleClick = {() => handleVotes()} text = "vote" />
    <Button handleClick = {() => handleRandom()} text = "next Anecdote" />
    <h2>Anecdote with most votes</h2>
 
    </div>
  )
}

export default App