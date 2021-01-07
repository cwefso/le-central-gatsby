import React from "react";
import Nav from "../components/Nav"
import Card from "../components/Card"
import Menu from "../components/Menu"


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

