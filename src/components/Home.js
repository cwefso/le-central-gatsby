import React, {useState, useEffect} from "react";
// import "../styles/Home.css"

function Home() {

	const [special, setSpecial] = useState([])

	useEffect(() =>{
		fetch('https://le-central-backend.herokuapp.com/specials')
		.then((res) => res.json())
		.then((result) => setSpecial(result[result.length - 1]))
		.catch((err) => console.log(err.message))
	}, [])

	return (
		<div >
			<div >
				Bienvenue
				<div >
					Due to Covid-19, our dining room is currently closed. We have expanded
					our outdoor dining options, but a reservation will be required until
					further notice. Merci pour votre compréhension.
				</div>
			</div>
			{special && 
			<div>
				<h2>La Spécialité du Jour</h2>
				<p>{special.name}</p>
				<p>{special.description}</p>
				<p>${special.price}</p>
			</div>
			} 
			{!special && 
				<div>
								<h2>La Spécialité du Jour</h2>
								<p>placeholder</p>
								<p>placeholder</p>
								<p>placeholder</p>
				</div>
			}
			<span></span>
			<div >
				<div >
					<h2>Hours</h2>
					<p>Mon-Fri 11:30AM - 02:00PM</p>
					<p>Mon-Fri 05:30PM - 10:00PM</p>
					<p>Sat 11:00AM - 02:00PM</p>
					<p>Sat 05:00PM - 10:00PM</p>
					<p>Sun 11:00AM - 02:00PM</p>
					<p>Sun 05:00PM - 09:00PM</p>
				</div>
				<div>
					<h2>Contact Us</h2>
					<p>P: 303-863-8094</p>
					<p>E: contactus@lecentral.com</p>
					<p>
						112 E 8th Ave
						<br></br>
						Denver, CO 80203
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
