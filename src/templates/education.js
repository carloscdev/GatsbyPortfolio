import { graphql } from "gatsby"
import React from "react"

export default props => {
  console.log(props.data)
  return (
    <div>
      <header>
        <h2></h2>
      </header>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      items {
        name
        degree
        score
        url
      }
    }
  }
`
