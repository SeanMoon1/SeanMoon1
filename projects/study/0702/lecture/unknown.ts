let value2: unknown = 10;
value2 = "hello";
//console.log(value2);

value2 = new Array();
if (value2 instanceof Array) {
  value2.push(33);
}

console.log(value2);
