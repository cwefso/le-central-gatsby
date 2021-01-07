import React from "react"
import Nav from "../components/Nav"
import Card from "../components/Card"
import Container from "../components/container"
import AboutUs from "../components/AboutUs"
import styles from  "../styles/about-us.module.css"

console.log(styles)

export default function AboutPage() {
  return (
    <Container>
    <div className="App">
      <Nav />
      <header className="App-header">
        <Card content={<AboutUs />} />
      </header>
    </div>
    </Container>
  )
}
