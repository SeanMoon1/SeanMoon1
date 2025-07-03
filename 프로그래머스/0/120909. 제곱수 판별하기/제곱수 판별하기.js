function solution(n) {
    for (let i = 1; i <= n/2; i++) {
        // console.log(i ** 2);
        if (i ** 2 === n) {
            return 1;
        }
    }
    
    return 2;
}