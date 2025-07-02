type Points = 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
let score: Points = 40;
// 동일한 구조이지만 불편하기 때문에 위에 방식대로 사용한다.
// let score2: 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 = 40;
let score2: Points = 50;

console.log(score);

// @ts-ignore
// @ts-nocheck
// prettier-ignore
type ComplexPerson = {
  name: string,
  age: number,
  birthday: Date,
  married: boolean,
  address: string,
};

type Type1 = number;
type Type2 = string;
type Type3 = boolean;
type Type4 = {};
type Type5 = { name: string } & { age: number };
type Type6 = { name: string } | { age: number };
type Type7 = Type5 & Type6;
