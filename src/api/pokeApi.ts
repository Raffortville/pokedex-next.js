import axios from 'axios';
import { successRequest } from 'utils/httpRequest';
import { IPokemons, PokemonType, PokemonAbility } from 'types/pokemonTypes';

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';
const LIMIT_NUMBER: number = 100;

export const getAllPokemons = async () => {
	let promises = [];

	async function getPokemon(id: number) {
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
						(elmt: { type: PokemonType }) => elmt.type.name
					),
					abilities: response.data.abilities.map(
						(elmt: { ability: PokemonAbility }) => elmt.ability.name
					),
				});
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	for (let i = 1; i <= LIMIT_NUMBER; i++) {
		promises.push(getPokemon(i));
	}

	return Promise.all(promises);
};
