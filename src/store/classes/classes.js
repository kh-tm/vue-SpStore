export class Smartphone {
    constructor(itemFromPHP, imagesURL) {
        this.id = itemFromPHP.id;
        this.manufacturerName = itemFromPHP.manufacturerName;
        this.model = itemFromPHP.model;
        this.price = +itemFromPHP.price;
        this.photos = itemFromPHP.photos;
        this.description = itemFromPHP.description;
        this.color = itemFromPHP.color;
        this.screenDiagonal = +itemFromPHP.screenDiagonal;
        this.screenResolution = itemFromPHP.screenResolution;
        this.cameraResolution = itemFromPHP.cameraResolution;
        this.RAM = itemFromPHP.RAM;
        this.ROM = itemFromPHP.ROM;
        this.CPU = itemFromPHP.CPU;
        this.stock = +itemFromPHP.count;

        this.photos = this.photos ? this.photos : imagesURL[this.id];
	}
	
    get fullName() {
        return `${this.manufacturerName} ${this.model} ${this.color} ${this.RAM}/${this.ROM}`
    }
}

export class SmartphoneBasket extends Smartphone {
    constructor(itemFromPHP, pushCount) {
        super(itemFromPHP);
        this._count = pushCount || 1;
    }
    set count(newValue) {
        this._count = newValue;
    }
    get count() {
        return this._count;
    }
}