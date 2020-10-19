import React from "react"

export default props => {
  const course = props.element
  return (
    <li className="shadow-lg">
      {course.title} <br />{" "}
      <span className="text-green-600">{parseInt(course.progress)}%</span>
    </li>
  )
}
