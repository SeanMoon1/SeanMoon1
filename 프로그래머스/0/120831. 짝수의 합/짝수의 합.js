function solution(n) {
    var answer = 0;
    // 부등호 연산자 작성 오류로 인한 문제 미해결
    for (let i =0; i <= n; i++) {
        if(i % 2 === 0) answer += i;
    }
    return answer;
}