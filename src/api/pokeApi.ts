import axios from 'axios';
import { IPokemon, NameValueObject } from 'services/types';
import { successRequest } from 'services/helpers';

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';
const LIMIT_NUMBER: number = 250;

export const getPokemonById = async (
	id: number | string | string[] | undefined
) => {
	let pokemon: IPokemon;

	try {
		const response = await axios.get(`${BASE_URL + id}`);
		if (successRequest(response.status)) {
			pokemon = {
				id: response.data.id,
				name: response.data.name,
				image: response.data.sprites.front_default,
				height: response.data.height,
				weight: response.data.weight,
				types: response.data.types.map(
					(elmt: { type: NameValueObject }) => elmt.type.name
				),
				abilities: response.data.abilities.map(
					(elmt: { ability: NameValueObject }) => elmt.ability.name
				),
			};

			return pokemon;
		}
	} catch (error) {
		console.log(error);
	}
};

export const getAllPokemons = async () => {
	let pokemons: IPokemon[] = [];

	for (let i = 1; i <= LIMIT_NUMBER; i++) {
		try {
			const pokemon: IPokemon[] | any = await getPokemonById(i);
			pokemons.push(pokemon);
		} catch (error) {
			console.log(error);
		}
	}
	return pokemons;
};
