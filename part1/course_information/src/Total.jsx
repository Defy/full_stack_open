function Total({ total }) {
  const sum = total.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)
  return <p>Number of exercises {sum}</p>
}

export default Total
