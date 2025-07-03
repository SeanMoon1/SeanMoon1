class Person {
  name: string;
  age: number;
}

let introduce = new Person();
introduce.name = "Alice";
introduce.age = 20;

console.log(`안녕하세요, 저는${introduce.age}살의 ${introduce.name}입니다.`);
