import React from "react";
// import "../styles/Card.css"

function Card({ content }) {
	return <section style={styles.card}>{content}</section>;
}

export default Card;

const styles = {
	card: {
		backgroundColor: '#fffaef',
		borderRadius: '2px',
		boxShadow: '2px 2px 2px rgb(144, 144, 144)',
		height: '60vh',
		marginTop: '20vh',
		opacity: '95%',
		minWidth: '60vw',
		overflow: 'hidden'
	}
}
