function solution(n) {
    let a = String(n).split('');
    let b = a.reduce((acc, cur) => acc + cur * 1,0);
    return b;    
}