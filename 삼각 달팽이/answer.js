function solution(n) {
    var answer = Array.from({ length: n }, () => []);

    let y = -1;
    let x = 0;
    let number = 1;

    for (let i = 0; i < n; i++)
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) y++;
            else if (i % 3 === 1) x++;
            else y-- && x--;
            answer[y][x] = number++;
        }

    return answer.flat();
}

console.log(solution(5));
