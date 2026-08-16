export type ProductModel = {

	id: number;
	name: string;
	manufactureDate: string;
	expirationDate: string;
	categoryId: number;
	price: number;

}

export type CategoryModel = {
	id: number;
	name: string;
}