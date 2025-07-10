function solution(n) {
    //자릿수별로 쪼개서 배열로 변환
    let numStr = n.toString();
    let a = numStr.split('').map(Number);
    //이후에 변환된 배열을 뒤집기
    let b = a.reverse();
    return b;
}