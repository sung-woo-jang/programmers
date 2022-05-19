function solution(board) {
    board.forEach((_, i) =>
        _.forEach((_2, j) => {
            if (i >= 1 && j >= 1 && board[i][j] === 1)
                board[i][j] =
                    Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;
        })
    );

    return Math.max(...board.map((e) => Math.max(...e))) ** 2;
}
