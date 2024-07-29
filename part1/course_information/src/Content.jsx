import Part from "./Part"

function Content({ course }) {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

export default Content
