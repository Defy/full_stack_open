import { useState } from "react"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function increaseValue(feedbackValue, callback) {
    return function () {
      callback(feedbackValue + 1)
    }
  }

  return (
    <div>
      <Header heading="give feedback" />
      <Button handleClick={increaseValue(good, setGood)} text="good" />
      <Button handleClick={increaseValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={increaseValue(bad, setBad)} text="bad" />
      <Header heading="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function Display({ text, value }) {
  return (
    <p>
      {text} {value}
    </p>
  )
}

function DisplayTable({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Header({ heading }) {
  return <h1>{heading}</h1>
}

function Statistics({ good, neutral, bad }) {
  function totalFeedback() {
    return [good, neutral, bad].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

  function averageFeedback() {
    return (good - bad) / totalFeedback()
  }

  function positiveFeedbackPercent() {
    const PERCENT = 100
    return (good / totalFeedback()) * PERCENT
  }

  if (!(good || neutral || bad)) return <p>No feedback given</p>

  return (
    <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={totalFeedback()} />
      <StatisticsLine text="average" value={averageFeedback()} />
      <StatisticsLine text="positive" value={positiveFeedbackPercent() + " %"} />
    </table>
  )
}

function StatisticsLine({ text, value }) {
  return <DisplayTable text={text} value={value} />
}

export default App
