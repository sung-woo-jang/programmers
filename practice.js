function loop(x, y, arr) {
    for (let i = x; i <= x + 1; i++) {
        for (let j = y; j <= y + 1; j++) {
            if (arr[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function solution(board) {
    var answer = 0;

    let [x, y] = [0, 0];
    let count;

    board.forEach((_, i) =>
        _.forEach((el, j) => {
            count = 0;
            if (el === 1) {
                while (false) {
                    if (!loop(x, y, board)) break;
                    x++;
                    y++;
                    count++;
                    loop(x, y, board);
                }
                answer = Math.max(answer, count);
            }
        })
    );
    return answer;
}
solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
]); // 9

const arr = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
];

for (let i = 0; i <= 2; i++) for (let j = 1; j <= 3; j++) console.log(arr[i][j]);
