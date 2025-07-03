class Product {
  name: string;
  price: number;
}

let display = new Product();
display.name = "MacBook";
display.price = 150;

console.log(`제품명: ${display.name}, 가격:${display.price}만원`);
