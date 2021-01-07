import React from "react"
import Nav from "../components/Nav"
import Card from "../components/Card"
import Container from "../components/container"
import AboutUs from "../components/AboutUs"


export default function AboutPage() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Card content={<AboutUs />} />
      </header>
    </div>
  )
}
