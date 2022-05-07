import React from 'react';
import Chip from '../../components/chip/Chip';
import CardPokemon from '../../components/card_pokemon/CardPokemon';
import styles from './HomePageStyles.module.css';

const HomePage = () => {
	return (
		<main className={styles.container}>
			<h1 className='header_1'>PokeDex</h1>
			<section className={styles.filter_section}>
				<h2 className='header_2'>select generation</h2>
				<div className={styles.chipsList}>
					<Chip />
				</div>
			</section>
			<section className={styles.cardsList}>
				<CardPokemon />
			</section>
		</main>
	);
};

export default HomePage;
