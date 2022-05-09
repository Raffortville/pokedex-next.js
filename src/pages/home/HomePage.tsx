import React, { useEffect, useState } from 'react';
import styles from './HomePageStyles.module.css';
import { getAllPokemons } from 'api/pokeApi';
import { isEmptyArray } from 'services/helpers';
import { IPokemon } from 'services/types';
import PokemonsList from 'features/pokemons_list/PokemonsList';
import FilterPokemons from 'features/filter_pokemons/FilterPokemons';

const HomePage = () => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [initialPokemons, setInitialPokemons] = useState<IPokemon[]>([]);
	const [selectedType, setSelectedType] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		let cancelRequest = false;

		const fetchPokemons = async () => {
			try {
				const data: IPokemon[] = await getAllPokemons();
				setInitialPokemons(data);
				setPokemons(data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};

		if (isEmptyArray(pokemons) && !cancelRequest) {
			setIsLoading(true);
			fetchPokemons();
		}

		return function cleanup() {
			cancelRequest = true;
		};
	}, []);

	useEffect(() => {
		if (selectedType !== undefined || selectedType !== '') {
			const filteredPokemons = initialPokemons.filter(
				(poke: IPokemon) => poke.types[0] === selectedType
			);
			setPokemons(filteredPokemons);
		}
	}, [selectedType]);

	const onSelectedType = (type: string) => setSelectedType(type);

	return (
		<main className={styles.container}>
			<h1 className='header_1'>PokeDex</h1>
			{isLoading ? (
				<h2>Loading pokemons...</h2>
			) : (
				<>
					{!isEmptyArray(pokemons) && (
						<FilterPokemons onClick={onSelectedType} />
					)}
					<PokemonsList pokemons={pokemons} />
				</>
			)}
		</main>
	);
};

export default HomePage;
