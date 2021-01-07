import React from "react";

function AboutUs() {
	return (
		<section style={styles.aboutUs}>
			<p style={styles.p}>
				Le Central has been giving Denver a sit-down history lesson on the
				breadth of French cuisine -- from the haute to the basse -- since 1981.
				Over the years, chefs and cooks from far-flung locales have passed
				through this kitchen, but owner Robert Tournier has always kept a close
				eye on the proceedings. At dinner, Le Central can be one of the city's
				most romantic spots, and for a relative pittance you can have feuilleté
				d'escargot or one of a number of mussel preparations. At lunch, the
				restaurant is more casual, but still a good spot to linger over your
				meal. Check out the prix fixe menus, such as the lobster prix fixe for
				just $36.
			</p>
      <br></br>
      <p style={styles.source}>- Westword</p>
		</section>
	);
}

export default AboutUs;

const styles = {
	aboutUs: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		minHeight: '60vh',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '65vw',
		maxWidth: '65vw',
		overflow: 'auto',
	},
	p: {
		width: '73%',
		fontFamily: '"Parisienne", serif',
		fontSize: '1em',
		padding: '1px 1px 1px 1px',
		fontStyle: 'italic',
	},
	source: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
}
