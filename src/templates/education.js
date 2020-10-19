import { graphql, Link } from "gatsby"
import React from "react"

export default props => {
  const pageData = props.data.educationJson
  return (
    <div>
      <header className="py-12 border-green-500 border-solid border-t-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="btn">
            Inicio
          </Link>
          <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
          <p className="text-xl">{pageData.description}</p>
        </div>
      </header>
      <ul>
        {pageData.items.map((item, index) => (
          <li className="bg-white shadow mt-4 flex" key={index}>
            <p>{pageData.slug}</p>
            <div className="flex items-center flex-1 p-8">
              <div className="flex-1">
                <h3>{item.name}</h3>
                {item.degree && (
                  <span className="inline-block p-2 radius bg-green-100 text-green-700">
                    {item.degree}
                  </span>
                )}
                {item.url && (
                  <a
                    className="btn mt-4 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                  >
                    Ver más
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      slug
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
