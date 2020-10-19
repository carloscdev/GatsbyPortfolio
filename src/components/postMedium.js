import React from "react"

export default props => {
  const post = props.element
  return (
    <li className="shadow-lg contenedorMedium">
      {post.title}
      <a className="btn" target="_blank" rel="noreferrer" href={post.link}>
        Leer
      </a>
    </li>
  )
}
