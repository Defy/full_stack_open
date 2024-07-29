function Total({ total }) {
  const sum = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return <p>Number of exercises {sum}</p>
}

export default Total
