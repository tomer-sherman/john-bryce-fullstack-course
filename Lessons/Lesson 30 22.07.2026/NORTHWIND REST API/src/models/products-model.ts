export class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;


    public constructor(id: number, name: string, price: number, stock: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }


}