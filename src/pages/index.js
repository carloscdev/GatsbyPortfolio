import React from "react"
import Header from "../components/Header"
import Repos from "../components/Repos"
import Codigo from "../components/codigofacilito"
import Medium from "../components/medium"
import Navbar from "../components/education-nav"

export default function Home() {
  return (
    <div>
      <Header />
      <Repos />
      <Codigo />
      <Medium />
      <Navbar />
    </div>
  )
}
