import React from 'react';
import styles from './CardPokemonStyles.module.css';
import Card from 'components/card/Card';

const CardPokemon = () => {
	return (
		<Card className={styles.card_pokemon} effectOnHover>
			<span className={styles.card_id}>34</span>
			<div className={styles.card_info}>
				<h2>title</h2>
				<div className={styles.cardInfo_types}>
					<span className={styles.type_text}>gogol</span>
					<span className={styles.type_text}>gogol 2sdsdsdsdsds</span>
				</div>
			</div>
			<div className={styles.card_image}>
				<img
					className={styles.image}
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
					alt='/'
				/>
			</div>
		</Card>
	);
};
export default CardPokemon;
