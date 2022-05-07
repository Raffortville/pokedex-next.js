import { IPokemons, FilterByType } from 'types/pokemonTypes';
import { pokemonsTypes } from '../constants';

export const pokemons = (pokemons: IPokemons) => {
	function getColor(type: string) {
		const typeColor = pokemonsTypes.find(
			(pokeType: FilterByType) => pokeType.name === type
		);

		return typeColor;
	}

	return {
		getColor,
	};
};
