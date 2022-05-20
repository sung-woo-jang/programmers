function solution(number, k) {
    var answer = '';
    number = number.split('');
    for (let i = 0; i <= number.length - k; i++)
        number.splice(number.indexOf(Math.min(...number).toString()), 1);
    answer = number.join('');

    return answer;
}

console.log(solution('1924', 2)); // "94"
console.log(solution('1231234', 3)); // "3234"
console.log(solution('4177252841', 4)); // "775841"
