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

function Header({ heading }) {
  return <h1>{heading}</h1>
}

function Statistics({ good, neutral, bad }) {
  function totalFeedback() {
    return [good, neutral, bad].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

  function averageFeedback() {
    return isNaN((good - bad) / totalFeedback()) ? 0 : (good - bad) / totalFeedback()
  }

  function positiveFeedbackPercent() {
    return isNaN(good / totalFeedback()) ? 0 : good / totalFeedback()
  }

  return (
    <>
      <Header heading="statistics" />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={totalFeedback()} />
      <Display text="average" value={averageFeedback()} />
      <Display text="positive" value={positiveFeedbackPercent() + " %"} />
    </>
  )
}

export default App
