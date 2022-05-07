import React from 'react';
import styles from './CardPokemonStyles.module.css';

const CardPokemon = () => {
	return (
		<div className={styles.card_container}>
			<div className={styles.card_pokemon}>
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
			</div>
		</div>
	);
};
export default CardPokemon;
