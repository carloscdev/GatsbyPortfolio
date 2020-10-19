import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from "./post"
import Course from "./courses"
export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          courses {
            title
            progress
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="container mx-auto p-12 max-w-6xl flex justify-center item-center">
      <div className="mt-6 flex-1">
        <Post
          data={data.codigofacilitoJson.data.courses}
          card={Course}
          title="Mis cursos de código facilito"
        />
      </div>
    </div>
  )
}
