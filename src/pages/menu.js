import React from "react";
// import "./Menu.css";
import Nav from "../components/Nav"
import Card from "../components/Card"
import Menu from "../components/Menu"
// import "../styles/Card.css"
// import "../styles/Menu.css"
// import "../styles/Nav.css"

export default function MenuPage() {
	return (
    <div className="App">
    <Nav />
    <header className="App-header">
      <Card content={<Menu />} />
    </header>
  </div>
    )
}

