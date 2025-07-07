//스프레드 연산자, 구조 분해
const user = { id: 1, name: "Kim", age: 20, address: "Seoul" };
const updated = { id: 2, ...user, name: "Lee", age: 25 };

//console.log(updated);

const userArr = [1, 2, 3, 4, 5];
const updatedArr = [1, 2, ...userArr, 6, 7];

//console.log(updatedArr);

//구조분해
const userSplit = { id: 1, name: "Kim", age: 20, address: "Seoul" };
// const { id, name, age, address } = userSplit;
// console.log(id, name, age, address);

const { id, name, ...rest } = userSplit;
//console.log(id, name, rest);

//1. 구조분해 할당을 이용해 다음 객체에서 'title' 과 'author'를 추출해보세요.
const userBook = {
  title: "book",
  author: "author",
  page: 258,
  language: "English",
};

const { title, author } = userBook;

//console.log(title, author);

/*
const arr = [1, 2, 2, 3, 4, 5, 5];
const set = new Set(arr);
for (let num of set) {
  console.log(Number(num) + 5);
}
const map = new Map();
map.set(
  "total",
  set.reduce((acc, cur) => acc + cur, 0)
);

console.log(map.get("total"));
*/

const numbers = [3, 4, 7, 8, 10, 13];
const evens = numbers.filter((num) => num % 2 === 0);
const squared = evens.map((num) => num * num);
const sum = squared.reduce((acc, cur) => acc + cur);
// console.log(sum);

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data OK!");
    }, 2000);
  });
}

async function loadData() {
  const data = await fetchData();
  console.log(data);
}
