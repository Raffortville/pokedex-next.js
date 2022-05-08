import Chip from 'components/chip/Chip';
import React from 'react';
import styles from './FilterPokemonsStyles.module.css';

const FilterPokemons = () => {
	return (
		<>
			<section className={styles.filter_section}>
				<h2 className='header_2'>select generation</h2>
				<div className={styles.chipsList}>
					<Chip />
				</div>
			</section>
		</>
	);
};

export default FilterPokemons;
