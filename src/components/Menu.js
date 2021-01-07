import React from "react";
// import "../styles/Menu.css"

function Menu() {
	return (
		<section style={styles.menuPage}>
			<section style={styles.menu}>
				<p style={styles.menuTitle}>Main Menu</p>
				<p style={styles.sectionHeader}>Hors d'oeuvres</p>
				<p style={styles.menuItem}>Soupe à L'Oignon onion, crouton, gruyere, fines herbs 14.00</p>
				<p style={styles.menuItem}>
					Salade Butter Lettuce leaf lettuce, anjou pear, tart cherries, toasted
					almonds, preserved lemon vinaigrette 13.00
				</p>
				<p style={styles.menuItem}>
					L'Escargot Bourguignon french escargot, garlic butter, pernod 14.00
				</p>
				<p style={styles.menuItem}>
					Duck Rillette housemade bread & butter pickles, toasted baguette,
					mustard 14.00
				</p>
				<p style={styles.menuItem}>
					Crab Cakes Beurre Blanc white wine butter sauce, bread & butter relish
					13.00
				</p>
				<p style={styles.menuItem}>Truffle Pommes Frites parmesan, parsley 13.00</p>
				<p style={styles.menuItem}>
					Crispy Brussels Sprouts bacon, almonds, parmesan, lemon-bacon
					vinaigrette 14.00
				</p>
				<p style={styles.menuItem}>
					Citrus Marinated Beets meyer lemon yogurt, cara cara orange, mint
					12.00
				</p>
				<p style={styles.sectionHeader}>Les Petite Plats</p>
				<p style={styles.menuItem}>
					Celery Root Remoulade celery root, persimmon, apple,
					tarragon-buttermilk, chili oil 14.00
				</p>

				<p style={styles.menuItem}>
					Celery Root Remoulade celery root, persimmon, apple,
					tarragon-buttermilk, chili oil 14.00
				</p>
				<p style={styles.menuItem}>
					Salade de Endive blue cheese fondue, beets, cara cara orange, crispy
					shallots, dijon vinaigrette 16.00
				</p>

				<p style={styles.menuItem}>
					Salade de Truite Fumée* smoked trout, frisée, fennel, orange, goat
					cheese, pecans, dijon vinaigrette 19.00
				</p>

				<p style={styles.menuItem}>
					Salade Niçoise confit tuna, haricot vert, potato, bell pepper, egg,
					pickled red onion, olive, persian cucumber, garlic basil vinaigrette
					23.00
				</p>

				<p style={styles.menuItem}>
					Confit de Canard arugula, blueberries, maitake mushroom, roasted
					shallot vinaigrette 25.00
				</p>

				<p style={styles.menuItem}>
					Moules au Safran PEI mussels, fennel & garlic confit, saffron, white
					wine, pernod 19.00
				</p>

				<p style={styles.menuItem}>
					Roasted Bone Marrow seasoned bread crumbs, fig jam, toasted baguette
					16.00
				</p>

				<p style={styles.sectionHeader}>Les Plats</p>

				<p style={styles.menuItem}>
					Pan-Roasted Salmon* roasted broccolini, celery root purée, beurre
					blanc, pomegranate gastrique 31.00
				</p>

				<p style={styles.menuItem}>
					Seared Dayboat Scallops* butternut squash purée, braised fennel,
					orange fumet 33.00
				</p>

				<p style={styles.menuItem}>
					Poulet Rôti roasted marys free-range chicken, bacon-lemon brussels
					sprouts, pommes frites, chicken jus 26.00
				</p>

				<p style={styles.menuItem}>
					Filet de Boeuf au Poivre* filet mignon, roasted garlic pommes purée,
					haricots verts, mushrooms, peppercorn sauce 39.00
				</p>

				<p style={styles.menuItem}>
					Le Central Cheeseburger* grass-fed wagyu beef, gruyere, bacon,
					caramelized onion, lemon aioli, brioche bun, pommes frites 21.00
				</p>

				<p style={styles.menuItem}>
					Short Rib Bourguignon cremini mushroom, pearl onion, roasted garlic
					pommes purée 37.00
				</p>

				<p style={styles.menuItem}>
					Mushrooms & Brie En Croute maitake mushroom, caramelized onion, triple
					crème brie, duxelles, frisée & watercress salad 20.00
				</p>

				<p style={styles.sectionHeader}>La Spécialité</p>
				<p style={styles.menuItem}>
					Le Central Cassoulet white bean stew with duck confit, sausage, lamb,
					pork 31.00
				</p>
				<p style={styles.sectionHeader}>Les Petites Assietes</p>
				<p style={styles.menuItem}>Pommes Frites 7.00</p>
				<p style={styles.menuItem}>Roasted Garlic Pommes Purée 7.00</p>
				<p style={styles.menuItem}>Sautéed Haricots Verts 10.00</p>
				<p style={styles.menuItem}>Roasted Cremini Mushrooms 10.00</p>

				<p style={styles.sectionHeader}>DESSERT</p>
				<p style={styles.menuItem}>
					Midnight Cake Bailey's cheesecake mousse, cocoa meringue kisses,
					chocolate whipped cream 13.00
				</p>
				<p style={styles.menuItem}>
					Honey Saffron Crème Brûlée cinnamon, cardamom, rolled gaufrette 13.00
				</p>
				<p style={styles.menuItem}>Pumpkin Pot de Crème pecan praline, cinnamon whipped cream 12.00</p>

				<p style={styles.menuItem}>Buche de Noel grand marnier, creme anglaise 15.00</p>

				<p style={styles.sectionHeader}>Fromage</p>
				<p style={styles.menuItem}>Cheese Plate $21. With toast points, jam, honeycomb, walnut</p>
				<p style={styles.menuItem}>
					Triple Creme Brie cow's milk soft rind, marin french cheese, petaluma,
					california
				</p>

				<p style={styles.menuItem}>Petite Basque sheep's milk cheese, pyrenees mountains, france</p>

				<p style={styles.menuItem}>
					Point Reyes "Bay Blue" cow's milk blue cheese, point reyes, california
				</p>

				<p style={styles.sectionHeader}>Cafe</p>
				<p style={styles.menuItem}>Coffee 3.00</p>
				<p style={styles.menuItem}>Espresso 4.00</p>
				<p style={styles.menuItem}>Latté 4.00</p>
				<p style={styles.menuItem}>Cappuccino 4.00</p>
				<p style={styles.menuItem}>Hot Tea 3.00</p>

				<p style={styles.sectionHeader}>HAPPY HOUR 3:00PM—7PM Bar Only</p>

				<p style={styles.sectionHeader}>Drinks</p>
				<p style={styles.menuItem}> *add $2 for drinks served "up"</p>
				<p style={styles.menuItem}>Well Drinks* 6.00</p>
				<p style={styles.menuItem}>Happy Hour White 6.00</p>
				<p style={styles.menuItem}>Happy Hour Red 6.00</p>
				<p style={styles.menuItem}>Draft Beer 5.00</p>

				<p style={styles.sectionHeader}>Bites</p>

				<p style={styles.menuItem}>Pommes Frites add truffle & parmesan 7 5.00</p>

				<p style={styles.menuItem}>
					Citrus Marinated Beets meyer lemon yogurt, cara cara orange, mint 9.00
				</p>

				<p style={styles.menuItem}>Crispy Brussels Sprouts bacon, parmesan, almonds 10.00</p>

				<p style={styles.menuItem}>
					PEI Mussles fennel & garlic confit, saffron, white wine, pernod 13.00
				</p>

				<p style={styles.menuItem}>
					Duck Rillette housemade "bread & butter" pickles, toasted baguette,
					mustard 10.00
				</p>
			</section>
		</section>
	);
}

export default Menu;

const styles = {
	menuPage: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minWidth: '65vw',
		overflowY: 'scroll',
		height: '59vh',
	},
	menu: {
		color: 'black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '65vh',
		height: '60vh',
	},
	menuTitle: {
		fontFamily: 'Parisienne, cursive',
		fontSize: '150%',
		padding: '1px 1px 1px 1px',
		fontStyle: 'italic',
		borderBottom: '1px solid black',
	},
	sectionHeader: {
		marginTop: '5%',
		fontFamily: 'Parisienne, cursive',
		fontSize: '100%',
		padding: '1px 1px 1px 1px',
		fontStyle: 'italic'
	},
	menuItem: {
		fontFamily: 'Roboto Condensed, sans-serif',
		fontSize: 'small',
		padding: '1px 1px 1px 1px',
		fontStyle: 'italic',
		marginBottom: '1%'
	}
}