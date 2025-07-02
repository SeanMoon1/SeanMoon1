/*
기존 JS 방식
function add(a, b) {
return a + b;
}
*/
function add(a: number, b: number): number {
  return a + b;
}

function runMore(distance: number): number {
  return distance + 10;
}
console.log(runMore(10));

function eat(calories: number) {
  console.log("I ate" + calories);
}

function sleepIn(hours: number): void {
  console.log("I slept " + hours + "hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(sleepIn);

function sumAll(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
