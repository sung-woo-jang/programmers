const createObj = () => {
    const obj = {};
    let count = 0;
    for (let i = 65; i <= 90; i++) {
        if (i <= 77) obj[String.fromCharCode(i)] = count++;
        else obj[String.fromCharCode(i)] = count--;
    }
    return obj;
};

function solution(name) {
    var answer = 0;
    return answer;
}
console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
