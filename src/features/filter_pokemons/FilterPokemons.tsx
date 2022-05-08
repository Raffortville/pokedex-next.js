import React, { useState } from 'react';
import styles from './FilterPokemonsStyles.module.css';
import { pokemonsTypesList } from 'services/constants';
import Chip from 'components/chip/Chip';
import { IFilterTypes } from 'services/types';

interface IFilterPokemons {
	onClick: (type: string) => void;
}

const FilterPokemons = (props: IFilterPokemons) => {
	const renderTypes = () => {
		const onChipClick = (type: string) => {
			props.onClick(type);
		};
		return pokemonsTypesList.map((pokeType: IFilterTypes, index: number) => (
			<Chip
				key={index}
				onClick={() => onChipClick(pokeType.name)}
				name={pokeType.name}
				style={{ backgroundColor: `${pokeType.color}` }}
			/>
		));
	};

	return (
		<>
			<section className={styles.filter_section}>
				<h2 className='header_2'>select generation</h2>
				<div className={styles.chipsList}>{renderTypes()}</div>
			</section>
		</>
	);
};

export default FilterPokemons;
