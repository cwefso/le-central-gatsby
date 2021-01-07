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
		<section style={styles.main}>
			<section style={styles.greeting}>
				Bienvenue
				<section style={styles.covid}>
					Due to Covid-19, our dining room is currently closed. We have expanded
					our outdoor dining options, but a reservation will be required until
					further notice. Merci pour votre compréhension.
				</section>
			</section>
			{special && 
			<section style={styles.special}>
				<h2 style={styles.h2}>La Spécialité du Jour</h2>
				<p style={styles.p}>{special.name}</p>
				<p style={styles.p}>{special.description}</p>
				<p style={styles.p}>${special.price}</p>
			</section>
			} 
			{!special && 
				<section style={styles.special}>
								<h2 style={styles.h2}>La Spécialité du Jour</h2>
								<p style={styles.p}>placeholder</p>
								<p style={styles.p}>placeholder</p>
								<p style={styles.p}>placeholder</p>
				</section>
			}
			<span style={styles.span}></span>
			<section style={styles.info}>
				<section style={styles.hours}>
				<h2 style={styles.h2}>Hours</h2>
					<p style={styles.p}>Mon-Fri 11:30AM - 02:00PM</p>
					<p style={styles.p}>Mon-Fri 05:30PM - 10:00PM</p>
					<p style={styles.p}>Sat 11:00AM - 02:00PM</p>
					<p style={styles.p}>Sat 05:00PM - 10:00PM</p>
					<p style={styles.p}>Sun 11:00AM - 02:00PM</p>
					<p style={styles.p}>Sun 05:00PM - 09:00PM</p>
				</section>
				<section style={styles.contact}>
				<h2 style={styles.h2}>Contact Us</h2>
					<p style={styles.p}>P: 303-863-8094</p>
					<p style={styles.p}>E: contactus@lecentral.com</p>
					<p style={styles.p}>
						112 E 8th Ave
						<br></br>
						Denver, CO 80203
					</p>
				</section>
			</section>
		</section>
	);
}

export default Home;

const styles = {
	main: {
		alignItems: 'center',
		display: "grid",
		gridTemplateAreas: "'greeting info' 'special info'",
		gridTemplateRows: '1fr 1fr',
		gridTemplateColumns: '1fr 1fr',
		height: '60vh',
		justifyContent: 'space-evenly',
		overflow: 'auto',
	},
	greeting: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: 'Parisienne, cursive',
		fontSize: 'xxx-large',
		padding: '1px 1px 1px 1px',
		fontStyle: 'italic',
		gridArea: 'greeting',
		// width: '30vw',
	},
	info: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		gridArea: 'info'
	},
	special: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '25vw',
    height: '30vh',
    fontSize: 'x-large',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
		color: 'black',
		gridArea: 'special'
	},
	span: {
		backgroundColor: 'black',
		width: '2px'
	},
	h2: {
		fontSize: '1em',
		fontFamily: 'Parisienne, cursive',
		width: '25vw'
	},
	covid: {
		fontSize: 'small',
		fontFamily: 'Roboto Condensed, sans-serif',
		fontStyle: 'normal',
		marginBlockEnd: '0em',
		marginBlockStart: '0em',
		width: '25vw',
	},
	p: {
		fontSize: 'small',
		fontFamily: 'Roboto Condensed, sans-serif',
		fontStyle: 'normal',
		marginBlockEnd: '0em',
		marginBlockStart: '0em',
		width: '25vw',
	},
	hours: {
    width: '25vw',
    height: '30vh',
    fontSize: 'x-large',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
	},
	contact: {
    width: '25vw',
    height: '30vh',
    fontSize: 'x-large',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
	},
	special: {
		width: '25vw',
    height: '30vh',
    fontSize: 'x-large',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
	}
	
}
