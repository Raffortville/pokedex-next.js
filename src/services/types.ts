export type NameValueObject = {
	name: string;
};

export interface IFilterTypes {
	name: string;
	color: string;
}

export interface IPokemon {
	id: number;
	name: string;
	image: string;
	height: number;
	weight: number;
	types: string[];
	abilities: NameValueObject[];
}
