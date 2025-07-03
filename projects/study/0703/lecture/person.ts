class Person {
  name: string;
  age: number;
}

let introduce = new Person();
introduce.name = "Alice";
introduce.age = 20;

console.log(`안녕하세요, 저는${introduce.age}살의 ${introduce.name}입니다.`);

/*
class Person {
  name: string = "Alice";
  age: number = 20;

  introduce(): void {
    console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다.`);
  }
}

const p = new Person();
p.introduce();
*/
