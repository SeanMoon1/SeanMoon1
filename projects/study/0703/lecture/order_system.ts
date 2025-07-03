class User {
  username: string;
}

class Product {
  productname: string;
}

class Order {
  user: User;
  product: Product;

  summary() {
    console.log(
      `사용자 ${this.user.username}가 ${this.product.productname}을 주문했습니다.`
    );
  }
}

let user = new User();
user.username = "홍길동";

let product = new Product();
product.productname = "MacBook";

let order = new Order();
order.user = user;
order.product = product;

order.summary();
