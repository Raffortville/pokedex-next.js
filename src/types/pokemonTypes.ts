export type PokemonType = {
	name: string;
};

export type PokemonAbility = {
	name: string;
};

export interface IPokemons {
	id: number;
	name: string;
	image: string;
	height: number;
	weight: number;
	types: PokemonType[];
	abilities: PokemonAbility[];
}

export interface FilterByType {
	name: string;
	color: string;
}
