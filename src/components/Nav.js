import React from "react";
// import "./Nav.css";
import { Link } from "gatsby";

function Nav() {
	return (
		<nav>
			<section className="nav-logo" aria-label="le central">
				<Link
					to="/"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="home"
				>
					<div className="logo">Le Central</div>
					<div className="subtext">Affordable French</div>
				</Link>
			</section>
			<section className="links" aria-label="links">
				<Link
					to="/menu"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="menu"
				>
					Menu
				</Link>
				<Link
					to="/about-us"
					style={{ textDecoration: "none", color: "inherit" }}
					aria-label="about-us"
				>
					About Us
				</Link>
			</section>
		</nav>
	);
}

export default Nav;
