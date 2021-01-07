import React, { useState, useEffect } from "react"
import Nav from "../components/Nav"
import Card from "../components/Card"
import Home from "../components/Home"
// import "../styles/global.css"

export default function HomePage() {
  const [special, setSpecial] = useState([])

  useEffect(() => {
    fetch("https://le-central-backend.herokuapp.com/specials")
      .then(res => res.json())
      .then(result => setSpecial(result[result.length - 1]))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Card content={<Home />} />
      </header>
    </div>
  )
}
