import React, { Fragment } from "react"

export default props => (
  <Fragment>
    <h2>{props.title}</h2>
    <p>Me encantan los cursos.</p>
    <ul className="mt-6 contenedorCursos">
      {props.data.map(el => (
        <props.card element={el} />
      ))}
    </ul>
  </Fragment>
)
