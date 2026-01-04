"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Example 1
class Product {
    name;
    price;
    constructor() {
        this.name = "Laptop";
        this.price = 1500;
    }
}
//object
var product = new Product();
console.log(`Product Name: ${product.name}, Price: $${product.price}`);
//Example 2
class product1 {
    name;
    price;
    ProductId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, productId) {
        this.name = name;
        this.price = price;
        this.ProductId = productId;
    }
    addtoCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is Ordered with ${this.ProductId}`;
        }
        else {
            return "no product in Cart";
        }
    }
}
//object
var p1 = new product1("Laptop", 1500, 12345);
p1.addtoCart();
console.log(p1.buyProduct());
var p2 = new product1("Smartphone", 800, 67890);
p2.addtoCart();
console.log(p2.buyProduct());
//# sourceMappingURL=class.js.map