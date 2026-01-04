//Example 1
class Product{
    name:string;
    price:number;

    constructor(){//non parameterized constructor
        this.name="Laptop";
        this.price=1500;
    }

}
//object
var product=new Product();
console.log(`Product Name: ${product.name}, Price: $${product.price}`);


//Example 2
class product1{
    name:string;
    price:number;
    ProductId:number;

    inCart=false;
    isOrdered=false;

    constructor(name:string, price:number, productId:number){//parameterized constructor
        this.name=name;
        this.price=price;
        this.ProductId=productId;
    }
    addtoCart():void{
        this.inCart=true;
    }
    buyProduct():string{
        if(this.inCart){
            return `product ${this.name} is Ordered with ${this.ProductId}`
        }
        else{
            return "no product in Cart"
        }
    }

}
//object
var p1=new product1("Laptop", 1500, 12345);
p1.addtoCart();
console.log(p1.buyProduct());

var p2=new product1("Smartphone", 800, 67890);
p2.addtoCart();
console.log(p2.buyProduct());