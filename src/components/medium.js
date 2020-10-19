//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, { useState, useEffect } from "react"
import Posts from "./post"
import postMedium from "./postMedium"

export default () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = sessionStorage.getItem("posts")
    if (data) {
      setPosts(JSON.parse(data))
    }
    let myPosts

    async function getMediumPosts() {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz"
      )
      myPosts = await response.json()
      sessionStorage.setItem("posts", JSON.stringify(myPosts.items))

      setPosts(myPosts.items)
    }
    getMediumPosts()
  }, [])
  return (
    <div className="container mx-auto p-12 max-w-6xl flex justify-center item-center">
      <div className="mt-6 flex-1">
        <Posts
          data={posts}
          card={postMedium}
          title="Mis publicaciones en Medium"
        />
      </div>
    </div>
  )
}
