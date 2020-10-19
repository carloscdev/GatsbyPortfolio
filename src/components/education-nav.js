import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default props => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            slug
            title
            description
          }
        }
      }
    }
  `)
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">
        <nav className="flex justify-center">
          {data.allEducationJson.edges.map((element, index) => {
            const { node } = element
            return (
              <article className="flex-1 bg-white shadow m-4 max-w-sm">
                <header>
                  <p className="font-bold leading-loose">{node.title}</p>
                  <div className="mt-8">
                    <p className="font-light">{node.description}</p>
                    <Link to={`/${node.slug}`} className="btn">
                      Ver Más
                    </Link>
                  </div>
                </header>
              </article>
            )
          })}
        </nav>
      </h2>
    </div>
  )
}
