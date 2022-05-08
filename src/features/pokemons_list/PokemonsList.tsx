import React from 'react';
import styles from './PokemonsListStyles.module.css';
import CardPokemon from 'features/card_pokemon/CardPokemon';
import { IPokemon } from 'services/types';
import { isEmptyArray } from 'services/helpers';
interface IPokemonsList {
	pokemons: IPokemon[];
}

const PokemonsList = (props: IPokemonsList) => {
	const renderPokemons = () => {
		return props.pokemons.map((pokemon: IPokemon, index: number) => (
			<CardPokemon key={index} pokemon={pokemon} />
		));
	};

	return <section className={styles.cardsList}>{renderPokemons()}</section>;
};

PokemonsList.defaultProps = {
	pokemons: [],
};

export default PokemonsList;
