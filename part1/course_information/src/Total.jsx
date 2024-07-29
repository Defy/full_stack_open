function Total({ course }) {
  const total = course.parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)
  return <p>Number of exercises {total}</p>
}

export default Total
