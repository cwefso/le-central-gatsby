import React from "react"
// import "../styles/Nav.css"
import { Link } from "gatsby"

function Nav() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navLogo} aria-label="le central">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontSize: "1.6em",
          }}
          aria-label="home"
        >
          <div style={styles.logo}>Le Central</div>
          <div style={styles.subtext}>Affordable French</div>
        </Link>
      </div>
      <div style={styles.links} aria-label="links">
        <Link
          to="/menu"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontSize: "1.6em",
          }}
          aria-label="menu"
        >
          Menu
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontSize: "1.6em",
          }}
          aria-label="about"
        >
          About Us
        </Link>
      </div>
    </nav>
  )
}

export default Nav

const styles = {
  nav: {
    alignItems: "center",
    backgroundColor: "#356d93",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: "85%",
    position: "absolute",
    width: "100vw",
    overflow: "none",
    boxShadow: "1px 1px 1px #21445c",
  },
  navLogo: {
    alignItems: "end",
    color: "#fffaef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Parisienne, cursive",
    height: "20vh",
    marginLeft: "5vw",
    width: "50vw",
  },
  logo: {
    fontSize: "2.5em",
    textShadow: "2px 2px 2px black",
  },
  subtext: {
    display: "flex",
    textShadow: "1px 1px 1px black",
    fontSize: "1.5em",
    marginLeft: "1.5vw",
    marginBottom: ".5em",
  },
  links: {
    alignItems: "center",
    color: "#fffaef",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Roboto Condensed, sans-serif",
    height: "20vh",
    justifyContent: "space-evenly",
    width: "50vw",
    textShadow: "1px 1px 1px black",
  },
}
