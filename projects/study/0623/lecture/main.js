 
/*alert("Hello, World!");

console.log("Hello, World!");

document.write("<h1>Document Write</h1>");

let name = prompt("당신의 이름은?");
alert("안녕하세요, "+ name + "님!");

 let: 재할당 가능(변수)
    const: 재할당 불가 (상수)
    var: 호이스팅 문제로 사용 지양 

let currentYear = 2025;
let birthYear = prompt("태어난 해를 입력하세요");
let age = currentYear - birthYear + 1;
alert("당신의 나이는 " + age + "세입니다.");

let name = "철수";
let age = 20;
let isStudent = true; 

console.log(typeof name); #string
console.log(typeof age);  #number
console.log(typeof isStudent);  #boolean 

 let price = 10000;
let rate = 0.2;
let discount = price * rate;
let finalPrice= price-discount;
console.log( " 할인된 가격은 " + finalPrice + " 원입니다. "); 

let name = "영희"
console.log(`안녕하세요, ${name}님!`);

/let a = 10;
a += 5;
console.log(a);
a -= 3;
console.log(a);
a *= 2;
console.log(a);
a /= 4;
console.log(a);
console.log(`최종 값은 ${a} 입니다.`); 


// 1. 이름과 나이를 입력받아 인사말 출력하기
let name = prompt (" 당신의 이름을 입력해주세요 ");
let age = prompt ( " 당신의 나이를 입력해주세요 ");
alert(`안녕하세요 ${name} 님, ${age}살이시군요. 만나서 반갑습니다.`);

// 2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기
let a = prompt (" a 값을 입력해주세요 ");
let b = prompt (" b 값을 입력해주세요 ");
alert(`a+b= ${a+b}, a-b= ${a-b}, a*b= ${a*b}, a/b= ${a/b} `);

// 3. == vs === 비교 실험하기
let c = 45;
alert(`== 연산자 결과값 ${c==45},=== 연산자 결과값 ${c==="45"}`);

// 실습 : 3의 배수 검사기 (% 모듈러 연산 : 나누기 한 이후 나머지값이 나온다.)
let num = prompt("숫자를 입력하세요.");
if (num % 3 === 0) {
    alert("3의 배수입니다.");
}
else {
    alert("3의 배수가 아닙니다.");
} 

let day = prompt("요일을 입력하세요");
switch (day) {
    case "월요일":
        alert("한주의 시작!");
        break;
    case "금요일":
        alert("불타는 금요일이네요!");
        break;
    default:
        alert("평범한 하루네요!");
}


// 1.숫자 두개를 변수로 저장하고 더한 결과를 출력해보세요.
let a = 5;
let b = 3;
alert(`a+b = ${a+b}`)

// 2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해보세요.
let name = 홍길동;
let age = 23;
alert(`${name}님은 ${age}살입니다.`)

// 3. 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요.
let side = 5;
alert(`정사각형의 넓이는 한변 X 한변 입니다. 따라서 결과는 ${side*side}입니다.`)


// 4. 숫자 하나가 짝수인지 홀수 인지 출력해보세요.
let number = 7;
if (number %2 === 0) {
    alert("짝수입니다");
}
else {
    alert("홀수입니다");
}

// 5. 나이에 따라 아래 문장을 출력해보세요.
let age = 14;
if (age >= 19) {
    alert("성인입니다");
}
else {
    alert("미성년자입니다");
}

// 6. 비밀번호가 맞는지 확인하는 코드를 작성해보세요.
let password = "1234";
let input = prompt("비밀번호 입력해주세요");
if (password === input ) {
    alert ("로그인 성공");
}
else {
    alert ("로그인 실패");
}
*/