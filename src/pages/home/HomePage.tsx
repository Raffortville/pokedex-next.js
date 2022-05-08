import React from 'react';
import styles from './HomePageStyles.module.css';
import PokemonsList from 'features/pokemons_list/PokemonsList';
import FilterPokemons from 'features/filter_pokemons/filterPokemons';

const HomePage = () => {
	return (
		<main className={styles.container}>
			<h1 className='header_1'>PokeDex</h1>
			<FilterPokemons />
			<PokemonsList />
		</main>
	);
};

export default HomePage;
