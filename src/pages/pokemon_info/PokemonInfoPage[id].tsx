import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './PokemonInfoPageStyles.module.css';
import { getPokemonById } from 'api/pokeApi';
import { IPokemon } from 'services/types';
import CardPokemon from 'features/card_pokemon/CardPokemon';

const PokemonInfoPage = () => {
	const [pokemon, setPokemon] = useState<IPokemon | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		let cancelRequest = false;

		const fetchPokemon = async () => {
			setIsLoading(true);
			try {
				const data: IPokemon | any = await getPokemonById(id);
				setPokemon(data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};

		if (pokemon == null && !cancelRequest && id !== null) {
			fetchPokemon();
		}

		return function cleanup() {
			cancelRequest = true;
		};
	}, []);

	useEffect(() => {
		if (id === null || id === undefined) {
			router.push('/');
		}
	}, [id]);

	const renderAbilities = () => {
		if (pokemon !== null) {
			return pokemon.abilities.map((ability, index) => (
				<h2 key={index} className='head_2'>
					{ability}
				</h2>
			));
		}
	};

	if (isLoading) return <h2>Loading...</h2>;

	return (
		<div className={styles.container}>
			{pokemon !== null && pokemon !== undefined && (
				<>
					<h1 className='head_1'>{pokemon.name}</h1>
					<div
						onClick={() => router.push('/')}
						className={styles.card_container}>
						<CardPokemon pokemon={pokemon} />
					</div>
					<div className={styles.infos_container}>
						<div className={styles.infos}>
							<h2 className='head_2'>Abilities :</h2>
							{renderAbilities()}
						</div>
						<div className={styles.infos}>
							<h2 className='head_2'>Weight :</h2>
							<h2 className='head_2'>{pokemon.weight}</h2>
						</div>
						<div className={styles.infos}>
							<h2 className='head_2'>Height :</h2>
							<h2 className='head_2'>{pokemon.height}</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PokemonInfoPage;
