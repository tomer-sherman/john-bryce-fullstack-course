export type ProductModel = {
	id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;

    image: File; // only for sending an image too the backend.
}
