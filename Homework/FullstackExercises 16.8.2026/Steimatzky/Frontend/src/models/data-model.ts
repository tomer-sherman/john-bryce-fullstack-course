export type DataModel = {
	id: number;
}

export type GenreModel = {
	id: number;
	name: string;
}

export type BookModel = {
	id: number;
	name: string;
	summary: string;
	genre: number;
	genreName: string;
	price: number;
	stock: number;
}
