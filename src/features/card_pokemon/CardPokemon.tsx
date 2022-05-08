import React from 'react';
import styles from './CardPokemonStyles.module.css';
import { IPokemon } from 'services/types';
import { pokemonsTypesList } from 'services/constants';
import Card from 'components/card/Card';

interface ICardPokemon {
	pokemon: IPokemon;
	effectOnHover?: boolean;
}

const CardPokemon = (props: ICardPokemon) => {
	const { pokemon } = props;

	const getPokemonTypeColor = () => {
		const type = pokemonsTypesList.find(
			(pokeType) => pokeType.name === pokemon.types[0]
		);

		const color = type?.color;
		return color;
	};

	const renderPokemonTypes = () => {
		return pokemon.types.map((pokeType: string, index: number) => (
			<span key={index} className={styles.type_text}>
				{pokeType}
			</span>
		));
	};

	return (
		<Card
			className={styles.card_pokemon}
			effectOnHover={props.effectOnHover}
			style={{ backgroundColor: getPokemonTypeColor() }}>
			<span className={styles.card_id}>{pokemon.id}</span>
			<div className={styles.card_info}>
				<h2>{pokemon.name}</h2>
				<div className={styles.cardInfo_types}>{renderPokemonTypes()}</div>
			</div>
			<div className={styles.card_image}>
				<img className={styles.image} src={pokemon.image} alt='/' />
			</div>
		</Card>
	);
};

CardPokemon.defaultProps = {
	effectOnHover: true,
};

export default CardPokemon;
