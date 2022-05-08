import React from 'react';
import { useRouter } from 'next/router';
import styles from './PokemonsListStyles.module.css';
import CardPokemon from 'features/card_pokemon/CardPokemon';
import { IPokemon } from 'services/types';

interface IPokemonsList {
	pokemons: IPokemon[];
}

const PokemonsList = (props: IPokemonsList) => {
	const router = useRouter();

	const renderPokemons = () => {
		const onPokemonClick = (id: number) =>
			router.push({
				pathname: `/pokemon_info/PokemonInfoPage[id]`,
				query: { id: id },
			});

		return props.pokemons.map((pokemon: IPokemon, index: number) => (
			<div key={index} onClick={() => onPokemonClick(pokemon.id)}>
				<CardPokemon pokemon={pokemon} />
			</div>
		));
	};

	return <section className={styles.cardsList}>{renderPokemons()}</section>;
};

PokemonsList.defaultProps = {
	pokemons: [],
};

export default PokemonsList;
