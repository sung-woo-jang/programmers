const solution = (n, t, m, p) =>
    Array.from({ length: t * m }, (_, i) => i)
        .map((el) => el.toString(n).toUpperCase())
        .join('')
        .split('')
        .filter((_, idx) => idx % m === p - 1)
        .slice(0, t)
        .join('');

// console.log(solution(2, 4, 2, 1)); // "0111"
// console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
