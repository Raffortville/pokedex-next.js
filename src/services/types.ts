export type NameValueObject = {
	name: string;
};

export interface IPokemons {
	id: number;
	name: string;
	image: string;
	height: number;
	weight: number;
	types: NameValueObject[];
	abilities: NameValueObject[];
}
