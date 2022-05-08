import React, { useEffect, useState } from 'react';
import styles from './HomePageStyles.module.css';
import { getAllPokemons } from 'api/pokeApi';
import { isEmptyArray } from 'services/helpers';
import PokemonsList from 'features/pokemons_list/PokemonsList';
import FilterPokemons from 'features/filter_pokemons/filterPokemons';
import { IPokemon } from 'services/types';

const HomePage = () => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		let cancelRequest = false;

		const fetchPokemons = async () => {
			setIsLoading(true);
			try {
				const data: IPokemon[] = await getAllPokemons();
				setPokemons(data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};

		if (isEmptyArray(pokemons) && !cancelRequest) {
			fetchPokemons();
		}

		return function cleanup() {
			cancelRequest = true;
		};
	}, []);

	return (
		<main className={styles.container}>
			<h1 className='header_1'>PokeDex</h1>
			{isLoading ? (
				<h2>Loading pokemons...</h2>
			) : (
				<>
					<FilterPokemons />
					<PokemonsList pokemons={pokemons} />
				</>
			)}
		</main>
	);
};

export default HomePage;
