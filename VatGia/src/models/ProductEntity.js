import BaseEntity from "./BaseEntity";

export default class ProductEntity extends BaseEntity {
    constructor(id, name, image, price) {
        super(id);
        this.name = name;
        this.image = image;
        this.price = price;
    }

    name: string    = '';
    image: string   = '';
    price: number   = '';
}