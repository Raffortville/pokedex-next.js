import React from 'react';
import styles from './PokemonsListStyles.module.css';
import CardPokemon from 'features/card_pokemon/CardPokemon';

const PokemonsList = () => {
	return (
		<section className={styles.cardsList}>
			<CardPokemon />
		</section>
	);
};

export default PokemonsList;
