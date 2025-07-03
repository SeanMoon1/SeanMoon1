class Product {
  name: string;
  price: number;
}

let display = new Product();
display.name = "MacBook";
display.price = 150;

console.log(`제품명: ${display.name}, 가격:${display.price}만원`);

/*
class Product {
  constructor(public name: string, public price: number) {}

  display(): void {
    console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
  }
}

const product = new Product("MacBook", 150);
product.display(); 
*/
