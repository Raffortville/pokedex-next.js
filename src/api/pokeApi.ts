import axios from 'axios';
import { IPokemons, NameValueObject } from 'services/types';
import { successRequest } from 'services/helpers';

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';
const LIMIT_NUMBER: number = 100;

export const getAllPokemons = async () => {
	let promises = [];

	async function getPokemonById(id: number) {
		let pokemons: IPokemons[] = [];
		try {
			const response = await axios.get(`${BASE_URL + id}`);
			if (successRequest(response.status)) {
				pokemons.push({
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
				});
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	for (let i = 1; i <= LIMIT_NUMBER; i++) {
		promises.push(getPokemonById(i));
	}

	try {
		const results = await Promise.all(promises);

		return results;
	} catch (error) {
		console.log(error);
	}
};
