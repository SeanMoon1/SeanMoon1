class Animal {
  sound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("멍멍");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("야옹");
  }
}

let dog = new Dog();
dog.sound();

let cat = new Cat();
cat.sound();

const animals: Animal[] = [new Dog(), new Cat()];
for (const a of animals) {
  a.sound();
}
